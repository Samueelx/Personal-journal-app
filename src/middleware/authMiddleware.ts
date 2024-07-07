import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    console.log("Auth Header:", authHeader);
    const token = authHeader && authHeader.split(' ')[1];
    console.log("Token: ",token);

    if(token == null) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if(err) {
            console.log(err)
            return res.sendStatus(403)
        };
        //@ts-ignore
        req.userId = (user as any).userId
        next();
    })
}