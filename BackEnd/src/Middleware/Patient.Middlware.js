import { Patient } from "../Models/Patient.Model.js"
import { CATCH_MESSAGE } from "../constant.js";

export const GetPatientID = (req,res,next,id)=>{
    Patient.findById(id)
        .then(patient=>{
            if(!patient){
                return res.json({error:"No patient Found"});
            }
            req.patient=patient;
            next();
        })
        .catch((error)=>{
            return res.status(400).json({error: "Server errror" })
        })
    
}