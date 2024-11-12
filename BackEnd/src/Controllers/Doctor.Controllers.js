import {Doctors} from "../Models/Doctor.Model.js"

export const AddDoctors=async(req,res)=>{
    try{    
        
        const {Email}=req.body;
        const ExistingEmail= await Doctors.findOne({Email})
        if(ExistingEmail){
            return res.status(400).json({
                message: "User email already exist",
            })
        }
        const doctors = new Doctors({...req.body,User:req.profile.id});
            await doctors.save() 
            .then((doctorsData)=>{
                return res.status(200).json({doctorsData})
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