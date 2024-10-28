import express from 'express';
import 'dotenv/config'
import mongoose from 'mongoose';
import { dbURL } from './Config/Db.Config.js';
import {PORT} from "./constant.js"
import bodyParser from 'body-parser';
const app= express();

//DataBase Connection
mongoose.connect(dbURL)
    .then(() => console.log('DB is Connected!'))
    .catch(()=>console.log('Not Connected DB'))
console.log(dbURL);
app.listen(PORT,()=>console.log(`app is conected to the ${PORT}`))

//Middlewares
app.use(bodyParser.json());


//My Routes
import authRoutes from "./Routers/Auth.Routers.js"

//Routers
app.use("/api/v1", authRoutes)