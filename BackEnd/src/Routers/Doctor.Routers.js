import { Router } from 'express';
import {AddDoctors} from "../Controllers/Doctor.Controllers.js";
import {IsAdmin,GetUserId} from "../Middleware/Auth.MiddleWare.js"
import  { DoctorValidation}  from "../Validation/Doctor.Validation.js";
import { validateResult } from "../Middleware/Validation.MiddleWare.js";

const router = Router();

router.param("userId",GetUserId)

router.post('/create/Doctor/:userId',IsAdmin,DoctorValidation,validateResult,AddDoctors)



export default router;
