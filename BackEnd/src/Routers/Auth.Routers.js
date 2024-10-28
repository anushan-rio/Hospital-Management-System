import { Router } from 'express';
import {Signup} from "../Controllers/Auth.Contollers.js"

const router = Router();

router.post("/signup", Signup)



export default router;