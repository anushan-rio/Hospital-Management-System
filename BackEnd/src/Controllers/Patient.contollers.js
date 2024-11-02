import { Patient } from "../Models/Patient.Model.js";
import { CATCH_MESSAGE } from "../constant.js";


export const AddPatientInfo = async(req,res)=>{
    try{    
    const patient = new Patient(req.body);
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
