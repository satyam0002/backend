// import mongoose from "mongoose"
// import { DB_NAME } from "./constants"
// import express from "express"
// const app=express()


import 'dotenv/config'
import connectDB from "./db/index.js";




connectDB()

// (async()=>{
//     try{
//          await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//          app.listen(process.env.PORT, ()=>{
//             console.log("APP LISTENING ON PORT 8000");
//          })
//     }
//     catch(error){
//         console.error("ERROR: ",error)
//         throw error;
//     }

// })()
