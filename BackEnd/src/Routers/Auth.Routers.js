import { Router } from 'express';
import {Signup} from "../Controllers/Auth.Contollers.js"

const router = Router();

router.get("/signup", Signup)



export default router;