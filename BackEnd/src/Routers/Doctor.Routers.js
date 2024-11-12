import { Router } from 'express';
import {Signup} from "../Controllers/Auth.Contollers.js";
import { Doctors } from '../Models/Doctor.Model.js';
import  { DoctorValidation}  from "../Validation/Doctor.Validation.js"
import { validateResult } from "../Middleware/Validation.MiddleWare.js"


const router = Router();

//router.param("userId",GetUserId)

router.post('/create/Doctor',DoctorValidation,validateResult,Signup)



export default router;
