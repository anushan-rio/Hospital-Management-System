import express from 'express';
import { expressjwt } from 'express-jwt';
import jwt from "jsonwebtoken";
import  {User}  from "../Models/User.Model.js";
import {Doctors} from "../Models/Doctor.Model.js"
import {CATCH_MESSAGE,ACCESS_TOKEN_SECRET} from "../constant.js";


//Geting UserID
export const GetUserId=async(req, res, next, id)=>{
    try{
        var user;
        user=await User.findById(id);
        if(!user){
            user=await Doctors.findById(id);
        }
        req.profile=user;
        next();
    }
    catch  (error){
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }

        
    
}

//Is Signed Miidleware
export const IsSignedIn = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access Token Is Missing' });
    }
    
    try {
        const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid Or Expired Token' });
    }
};

//IsIsAuthenticate
export const IsAuthenticate=(req,res,next)=>{
    let checker=req.profile._id==req.user.id;
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
export const IsAdmin=(req,res,next)=>{
    if(req.profile.Role!="Admin"){
        return res.json({message:"You Are Not Admin"})
    }
    next();
}


//IsDoctor Middleware
export const IsDoctor=(req,res,next)=>{
    if(req.profile.Role!="Doctor"){
        return res.json({message:"You Are Not Dcotor"})
    }
    next();
}

//Is paitent Middleware
export const IsPaitent=(req,res,next)=>{
    if(req.patient.Role!="Paitent"){
        return res.json({message:"You Are Not Paitent"})
    }
    next();
}

//Is Admin Or Doctor Middleware
export const IsAdminOrDoctor=(req,res,next)=>{
    if(req.profile.Role!="0" || req.profile.Role!="1"){
        return res.json({message:"You Are Not Admin"})
    }
    next();
}
