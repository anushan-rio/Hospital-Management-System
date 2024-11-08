import express from 'express';
import 'dotenv/config'
import cors from 'cors';

import mongoose from 'mongoose';
import { dbURL } from './Config/Db.Config.js';
import {PORT} from "./constant.js"
import bodyParser from 'body-parser';
const app= express();

//DataBase Connection
mongoose.connect(dbURL)
    .then(() => console.log('DB is Connected!'))
    .catch(()=>console.log('Not Connected DB'))

//Middlewares
app.use(bodyParser.json());
app.use(cors());


//My Routes
import authRoutes from "./Routers/Auth.Routers.js";
import patientRoutes from"./Routers/Patient.Routers.js";

//Routers
app.use("/api/v1", authRoutes)
app.use("/api/V1", patientRoutes)


app.listen(PORT,()=>console.log(`app is conected to the ${PORT}`))
