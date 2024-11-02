import { Router } from 'express';
import {AddPatientInfo} from "../Controllers/Patient.contollers.js"
import {GetUserId,IsAuthenticate,IsSignedIn} from "../Middleware/Auth.MiddleWare.js"

const router = Router();

router.param("UserID",GetUserId)


router.post("/Patient/:UserID",IsSignedIn,IsAuthenticate,AddPatientInfo);


export default router;