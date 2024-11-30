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


//GetAllDoctors Data
export const GetAllDcotor = (req,res)=>{
    try{
    Doctors.find({User:req.profile.id})
    .then((AllDoctorData)=>{
        return res.status(200).json({AllDoctorData})
    })
}
catch (error) {
    return res.status(500).json({
        error: "Internal Server Error"
    });
}
}


//GetDoctors Data
export const GetDoctorData =(req,res)=>{
    try{
        Doctors.find({_id:req.doctor.id})
        .then((DoctorData)=>{
            return res.status(200).json({DoctorData})
        })
    }
    catch (error) {
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
}


//Update Doctor
export const UpdateDoctorData =(req,res) =>{
    try {
        const Updates = req.body
        Doctors.findByIdAndUpdate({_id:req.doctor.id}, Updates)
        .then((UpdatedDetails)=>{
            return res.status(200).json({UpdatedDetails})
        })        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
}