import { Patient } from "../Models/Patient.Model.js";
import { CATCH_MESSAGE } from "../constant.js";


export const AddPatientInfo = async(req,res)=>{
    try{    
    const patient = new Patient(req.body);
        await patient.save() 
        .then((patientdata)=>{
            console.log("T555---->",)
            return res.status(200).json({patientdata})
        })
        .catch((error)=>{
            return res.status(400).json({
            error: error
        })
        })
}
    catch (error) {
    return res.status(500).json({
        error: "Internal Server Error"
    });
}
}
