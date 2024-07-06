import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

const JWT_TOKEN = process.env.JWT_TOKEN as string;

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    console.log("Auth Header:", authHeader);
    const token = authHeader && authHeader.split(' ')[1];
    console.log("Token: ",token);

    if(token == null) return res.sendStatus(401);

    jwt.verify(token, JWT_TOKEN, (err, user) => {
        if(err) {
            console.log(err)
            return res.sendStatus(403)
        };
        //@ts-ignore
        req.userId = (user as any).userId
        next();
    })
}