import { Router } from 'express';
import {AddPatientInfo} from "../Controllers/Patient.contollers.js"


const router = Router();

router.post("/Patient",AddPatientInfo);


export default router;