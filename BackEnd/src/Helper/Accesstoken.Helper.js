//GenerateAccessToken 
import jwt from "jsonwebtoken";
import {ACCESS_TOKEN_SECRET} from "../constant.js"
import { expressjwt } from 'express-jwt';


export function generateAccessToken(user) {
    const payload = {
        id: user.id,
        Email: user.Email   
    };
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: '1h' }); 
}