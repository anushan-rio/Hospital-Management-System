import express from 'express';
import 'dotenv/config'
import mongoose from 'mongoose';
import { dbURL } from './Config/Db.Config.js';
import {PORT} from "./constant.js"

const app=express();

//DataBase Connection
mongoose.connect(dbURL)
    .then(() => console.log('DB is Connected!'))
    .catch(()=>console.log('Not Connected DB'))

app.listen(PORT,()=>console.log(`app is conected to the ${PORT}`))