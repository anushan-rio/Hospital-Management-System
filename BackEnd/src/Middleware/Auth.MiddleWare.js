import express from 'express';
import { expressjwt } from 'express-jwt';
import  {User}  from "../Models/User.Model.js";
import {CATCH_MESSAGE} from "../constant.js";



//Geting UserID
export const GetUserId=(req, res, next, id)=>{
    User.findById(id)
        .then(user=>{
            if(!user){
                return res.json({error:"No User Found"});
            }
            req.profile=user;
        })
        .catch((error)=>{
            return res.status(400).json({error: CATCH_MESSAGE})
        })
    next();
}

//Is Signed Miidleware
export const IsSignedIn=expressJwt({
    secret:process.env.SECRET,
    userProperty: "auth"
})

//IsIsAuthenticate
export const IsAuthenticate=(req,res,next)=>{
    let checker=req.profile._id==req.auth._id
    try{
            if(!checker){
                return res.json({message:"Access denied"})
            }
        }
        catch (error) {
            return res.status(500).json({error: "Internal Server Error"});
        }
    next();
}

//IsAdmin Middleware
exports.IsAdmin=(req,res,next)=>{
    if(!req.profile.role=="0"){
        return res.json({message:"You Are Not Admin"})
    }
    next();
}

//Is paitent Middleware
export const IsPaitent=(req,res,next)=>{
    if(!req.profile.role=="2"){
        return res.json({message:"You Are Not Admin"})
    }
    next();
}

//IsDoctor Middleware
export const IsDoctor=(req,res,next)=>{
    if(!req.profile.role=="1"){
        return res.json({message:"You Are Not Admin"})
    }
    next();
}