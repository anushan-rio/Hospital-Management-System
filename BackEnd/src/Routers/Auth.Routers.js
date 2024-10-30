import { Router } from 'express';
import {Signup,SendOpt,VerifyOtp} from "../Controllers/Auth.Contollers.js"
import { validateResult } from "../Middleware/Validation.MiddleWare.js"
import  { RegisterValidator }  from "../Validation/Register.Validation.js"

const router = Router();

router.post("/signup",RegisterValidator,validateResult, Signup);
router.post("/sendotp",SendOpt);
router.post("/verifyotp",VerifyOtp);



export default router;