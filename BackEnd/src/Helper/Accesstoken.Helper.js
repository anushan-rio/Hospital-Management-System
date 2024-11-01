//GenerateAccessToken 
import jwt from "jsonwebtoken";
import { expressjwt } from 'express-jwt';


export function generateAccessToken(user) {
    const payload = {
        id: user.id,
        Email: user.Email   
    };
    const SECRET_KEY= "Managament"
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); 
}