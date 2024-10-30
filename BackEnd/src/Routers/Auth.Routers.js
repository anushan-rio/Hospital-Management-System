import { Router } from 'express';
import {Signin, Signup} from "../Controllers/Auth.Contollers.js"

const router = Router();

router.post("/signup", Signup)
router.post("/signin", Signin)




export default router;