import { Router } from 'express';
import {AddPatientInfo} from "../Controllers/Patient.contollers.js"
import {AddPatientInfo, GetAllPatient,GetPatient} from "../Controllers/Patient.contollers.js"
import { GetPatientID } from '../Middleware/Patient.Middlware.js';


const router = Router();

router.param("UserID",GetUserId)
router.param("PatientID",GetPatientID)


router.post("/Patient/:UserID",IsSignedIn,IsAuthenticate,AddPatientInfo);
router.get("/Patient/GetAllUser/:UserID",IsSignedIn, IsAuthenticate, IsAdmin ,GetAllPatient)
router.get("/Patient/GetPatient/:PatientID" ,GetPatient)



export default router;