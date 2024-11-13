import { Router } from 'express';
import {AddDoctors,DoctorsSignin,RemoveDoctorData} from "../Controllers/Doctor.Controllers.js";
import {IsAdmin,GetUserId} from "../Middleware/Auth.MiddleWare.js"
import  { DoctorValidation}  from "../Validation/Doctor.Validation.js";
import { validateResult } from "../Middleware/Validation.MiddleWare.js";
import {GetDoctorID} from "../Middleware/Doctor.MiddleWare.js"
const router = Router();

router.param("userId",GetUserId);
router.param("DoctorsId",GetDoctorID);

router.post('/create/Doctor/:userId',IsAdmin,DoctorValidation,validateResult,AddDoctors);
router.post('/signin/Doctor',DoctorsSignin);
router.delete('/delete/Doctor/:userId/:DoctorsId',IsAdmin,RemoveDoctorData);



export default router;
