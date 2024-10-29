import  {User}  from "../Models/User.Model.js";
import { SUCESS_MESSAGE, CATCH_MESSAGE} from "../constant.js";
import {generateOTP} from "../Helper/OtpGenerator.js"

export const Signup = async (req,res)=>{
    try{
        const {Email} = req.body
        console.log(Email);
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
catch(error){
    return res.status(400).json({
        error: CATCH_MESSAGE
    });
}
}
