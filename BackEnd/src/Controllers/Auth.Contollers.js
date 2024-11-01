import  {User}  from "../Models/User.Model.js";
import { SUCESS_MESSAGE, CATCH_MESSAGE} from "../constant.js";
import { generateAccessToken } from "../Helper/Accesstoken.Helper.js"
import {Otpmodel} from "../Models/VerifyOtp.Model.js"
import { sendOtpEmail ,generateOTP } from  "../Helper/OtpSender.js";


//Signup Controller
export const Signup = async (req,res)=>{
    try{
        const {Email} = req.body
        const ExistingEmail= await User.findOne({Email})
        if(ExistingEmail){
            return res.status(400).json({
                message: "User email already exist"
            })
        }
    const user = new User(req.body);
        await user.save() 
        .then((userdata)=>{
            return res.status(200).json({HospitalName: userdata.HospitalName,Email: userdata.Email,id: userdata._id,message: SUCESS_MESSAGE
            })
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
    }}

//Sign in Controller 
export const Signin = async (req, res) => {
    
    try {
        const { Email, password } = req.body;
        const user = await User.findOne({ Email });
        
        if (!user) {
            return res.status(400).json({
                error: "Email Not Found"
            });
        }

        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: "Email and Password do not match"
            });
        } 
        const accesstoken =  generateAccessToken(user)
        const {_id,Role}= user
            return res.json({accesstoken, user: {_id,Role,Email}})
    } catch (error) {
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
};



//Send Otp Controller
export const SendOpt=async (req,res)=>{
    try{
            const {Email}=req.body
            const Otp=generateOTP();
            
            const ExistingEmail=await  User.findOne({Email})
            if(ExistingEmail){
                const saveOtpData = new Otpmodel({...req.body, otp: Otp });
                await saveOtpData.save()
                sendOtpEmail(Email,Otp)
                return res.json({message:`OTP As Sent To Your Mail ${Email}`})
            }
        }
    catch(error){
        return res.status(400).json({ error: CATCH_MESSAGE});
    }

}

export const VerifyOtp=async (req,res)=>{
    try{
        const {otp}=req.body;
        const ExistingOtp=await Otpmodel.findOne({otp});
        if(ExistingOtp){
            
            
            const filter = { Email: ExistingOtp.Email }; 
            const update = { $set: { Isverified: true } };
            const result = await User.updateOne(filter, update);
            return res.json({message:"Verification Is SuccessFull"})
        }
        else{
            return res.json({message:"OOPS Wrong OTP"})
        }
        
    }
    catch(error){
        return res.status(400).json({ error: CATCH_MESSAGE});
    }
}
