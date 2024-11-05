import { Router } from 'express';
import {Signup,SendOpt,VerifyOtp, Signin} from "../Controllers/Auth.Contollers.js"
import { validateResult } from "../Middleware/Validation.MiddleWare.js"
import  { RegisterValidator, SigninValidator,SendOtpValidator,OtpValidator }  from "../Validation/Auth.Validation.js"


const router = Router();

//router.param("userId",GetUserId)

router.post("/signup",RegisterValidator,validateResult, Signup);
router.post("/signin",SigninValidator,validateResult, Signin);
router.post("/sendotp",validateResult,SendOpt);
router.post("/verifyotp",validateResult,VerifyOtp);




export default router;