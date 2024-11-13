import {Doctors} from "../Models/Doctor.Model.js"
import { generateAccessToken } from "../Helper/Accesstoken.Helper.js"



//SignIn Doctor
export const DoctorsSignin = async (req, res) => {
    
    try {
        const { Email, password} = req.body;
        const doctor= await Doctors.findOne({ Email });
        if (!doctor) {
            return res.status(400).json({error: "Email Not Found" });
        }
        if (!doctor.authenticate(password)) {
            return res.status(401).json({error: "Email and Password do not match"});
        } 
        const accesstoken =  generateAccessToken(doctor)
        const {_id,Role,Isverified}= doctor
        
            return res.json({accesstoken, user: {_id,Role,Isverified,LoginFlag:"1"}})
    }
    catch (error) { 
        return res.status(500).json({error:"Internal Server Error"});
    }
}


//Add Docotors
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

//Delete Doctors
export const RemoveDoctorData = (req,res)=>{
    try {
        Doctors.findByIdAndDelete({_id:req.doctor.id})
        .then((RemoveDoctorData)=>{
            return res.status(200).json({RemoveDoctorData})
        })
        
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error"});
    }
}