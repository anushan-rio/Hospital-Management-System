import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { dbURL } from './Config/Db.Config.js';
import {PORT} from "./constant.js"
const app= express();

//DataBase Connection
mongoose.connect(dbURL)
    .then(() => console.log('DB is Connected!'))
    .catch(()=>console.log('Not Connected DB'))

//Middlewares
app.use(bodyParser.json());


//Custom Routers
import authRoutes from "./Routers/Auth.Routers.js";

//API Call
app.use("/api/v1", authRoutes);



app.listen(PORT,()=>console.log(`app is conected to the ${PORT}`))
