import { Patient } from "../Models/Patient.Model.js";
import { CATCH_MESSAGE } from "../constant.js";


export const AddPatientInfo = async(req,res)=>{
    try{    
    const patient = new Patient({...req.body,User:req.profile.id});
        await patient.save() 
        .then((patientdata)=>{
            return res.status(200).json({patientdata})
        })
        .catch((error)=>{
            return res.status(400).json({
            error: CATCH_MESSAGE
        })
        })
}
    catch (error) {
    return res.status(500).json({
        error: "Internal Server Error"
    });
}
}

export const GetAllPatient = (req,res)=>{
    try{
    Patient.find({User:req.profile.id})
    .then((AllPatientData)=>{
        return res.status(200).json({AllPatientData})
    })
}
catch (error) {
    return res.status(500).json({
        error: "Internal Server Error"
    });
}
}

export const GetPatient =(req,res)=>{
    try{
        Patient.find({_id:req.patient.id})
        .then((PatientData)=>{
            return res.status(200).json({PatientData})
        })
    }
    catch (error) {
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
}



