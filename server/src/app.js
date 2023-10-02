import express from 'express';
import apiRoute, { apiProtected } from './routes/api.js';
import { DB_CONNECT } from './utils/constants.js';
import mongoose from "mongoose"
import AuthMiddleware from './middlewares/AuthMiddleware.js';
const app=express();
mongoose.connect(DB_CONNECT,{useNewUrlParser:true,//this is the new way as mongoose updated and not it does not
    useUnifiedTopology:true},).then(()=>console.log("connected"))//support the callback function sowe use then and catch
    .catch((err)=>{console.log(err);});
app.use(express.json());
app.use('/api/',apiRoute)
app.use('/api/',AuthMiddleware,apiProtected)
app.listen(3000,()=>{
    console.log("server is running")
})
