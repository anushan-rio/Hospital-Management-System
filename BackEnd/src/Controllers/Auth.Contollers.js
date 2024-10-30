 import  {User}  from "../Models/User.Model.js";
 import { SUCESS_MESSAGE, CATCH_MESSAGE} from "../constant.js";
 import { generateAccessToken } from "../Helper/Accesstoken.Helper.js"


export const Signup = async (req,res)=>{
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
        
        return res.status(200).json({
            HospitalName: userdata.HospitalName,
            Email: userdata.Email,
            id: userdata._id,
            message: SUCESS_MESSAGE
        })
    })
    .catch((error)=>{
       return res.status(400).json({
        error: CATCH_MESSAGE
       })
    })
}



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
