import { Request, Response } from "express";
import { User } from "../models/userModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const JWT_SECRET = process.env.JWT_SECRET as string;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

/**
 * User Registration
 */
export const registerUser = async (req: Request, res: Response) => {
  const { username, email, firstName, lastName, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ message: "User registration failed!", error });
  }
};

/**
 * User Login
 */
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    console.log("User found")

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    console.log("Correct password")
    console.log("Secret Key", JWT_SECRET);

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '6h' });
    console.log("Token generated", token);

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', });
  }
};

/**
 * Updating user profile
 */
export const updateProfile = async (req: Request, res: Response) => {
    const {username, email, password} = req.body;
    //@ts-ignore
    const userId = req?.userId;

    try {
        const user = await User.findByPk(userId);
        if(!user){
            return res.status(404).json({message: 'user not found'});
        }
        if (username) user.username = username;
        if (email) user.email = email;
        if (password) user.password = await bcrypt.hash(password, 10);

        await user.save();
        res.json({user});
    } catch (error) {
        res.status(500).json({message: 'Profile update failed', error});
    }
}
