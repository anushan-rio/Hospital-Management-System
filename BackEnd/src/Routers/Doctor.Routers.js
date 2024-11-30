import { Router } from 'express';
import {AddDoctors,DoctorsSignin,RemoveDoctorData,GetDoctorData,GetAllDcotor,UpdateDoctorData} from "../Controllers/Doctor.Controllers.js";
import {IsAdmin,GetUserId} from "../Middleware/Auth.MiddleWare.js"
import  { DoctorValidation}  from "../Validation/Doctor.Validation.js";
import { validateResult } from "../Middleware/Validation.MiddleWare.js";
import {GetDoctorID} from "../Middleware/Doctor.MiddleWare.js"
const router = Router();

router.param("UserID",GetUserId);
router.param("DoctorsId",GetDoctorID);

router.post('/create/Doctor/:UserID',IsAdmin,DoctorValidation,validateResult,AddDoctors);
router.post('/signin/Doctor',DoctorsSignin);
router.get("/Get/Doctor/:UserID/:DoctorsId" ,IsAdmin,GetDoctorData);
router.get("/GetAll/Doctor/:UserID" ,IsAdmin,GetAllDcotor);

router.delete('/delete/Doctor/:UserID/:DoctorsId',IsAdmin,RemoveDoctorData);

router.put("/Update/Doctor/:UserID/:DoctorsId" ,IsAdmin,UpdateDoctorData)




export default router;
