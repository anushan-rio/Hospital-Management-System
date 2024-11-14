import { Doctors } from "../Models/Doctor.Model.js"
import { CATCH_MESSAGE } from "../constant.js";

export const GetDoctorID = (req,res,next,id)=>{
    Doctors.findById(id)
        .then(doctor=>{
            if(!doctor){
                return res.json({error:"No doctor Found"});
            }
            req.doctor=doctor;
            next();
        })
        .catch((error)=>{
            return res.status(400).json({error: "Server errror" })
        })
    
}