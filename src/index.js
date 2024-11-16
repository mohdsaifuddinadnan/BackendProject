import dotenv from "dotenv";
dotenv.config({path:'./env'});
import connectDB from "../src/db/index.js";
import { app } from "./app.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 4000 , ()=>{
        console.log(`Server is running on port ${process.env.PORT || 4000}`);
    })

}).catch((error)=>{
    console.log("MongoDB connection Failed",error);
})