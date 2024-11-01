import { Router } from 'express';
import {Signup,SendOpt,VerifyOtp, Signin} from "../Controllers/Auth.Contollers.js"
import { validateResult } from "../Middleware/Validation.MiddleWare.js"
import  { RegisterValidator, SigninValidator }  from "../Validation/Auth.Validation.js"


const router = Router();

router.post("/signup",RegisterValidator,validateResult, Signup);
router.post("/signin",SigninValidator,validateResult, Signin);
router.post("/sendotp",SendOpt);
router.post("/verifyotp",VerifyOtp);




export default router;