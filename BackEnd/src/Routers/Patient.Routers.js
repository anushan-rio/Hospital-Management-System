import { Router } from 'express';

import {AddPatientInfo, GetAllPatient,GetPatient, RemovePatientData, UpdatePatientData} from "../Controllers/Patient.contollers.js"
import {GetUserId,IsAdmin,IsAuthenticate,IsSignedIn, IsDoctor, IsAdminOrDoctor} from "../Middleware/Auth.MiddleWare.js"

import { GetPatientID } from '../Middleware/Patient.Middlware.js';


const router = Router();

router.param("UserID",GetUserId)
router.param("PatientID",GetPatientID)


router.post("/Patient/:UserID",IsSignedIn,IsAuthenticate, IsAdmin, AddPatientInfo);
router.get("/Patient/GetAllUser/:UserID",IsSignedIn, IsAuthenticate, IsAdmin ,GetAllPatient)
router.get("/Patient/GetPatient/:UserID/:PatientID" ,IsDoctor,GetPatient)

//Delete Router
router.delete("/Patient/RemovePatient/:PatientID" ,RemovePatientData)


//Update Router
router.put("/Patient/UpdatePatient/:UserID/:PatientID" ,IsDoctor,UpdatePatientData)

export default router;