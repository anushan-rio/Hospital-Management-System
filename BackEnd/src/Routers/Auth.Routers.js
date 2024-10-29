import { Router } from 'express';
import {Signup} from "../Controllers/Auth.Contollers.js"
import { validateResult } from "../Middleware/Validation.MiddleWare.js"
import  { RegisterValidator }  from "../Validation/Register.Validation.js"

const router = Router();

router.post("/signup",RegisterValidator,validateResult, Signup)



export default router;