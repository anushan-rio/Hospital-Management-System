import { Router } from 'express';
import {AddPatientInfo} from "../Controllers/Patient.contollers.js"
import {GetUserId,IsAuthenticate,IsSignedIn,IsAdmin} from "../Middleware/Auth.MiddleWare.js"

const router = Router();

router.param("UserID",GetUserId)


router.post("/Patient/:UserID",IsSignedIn,IsAuthenticate,IsAdmin,AddPatientInfo);


export default router;