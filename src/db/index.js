import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(`mongodb+srv://saifuddin:saifuddin@cluster0.sme7r.mongodb.net/youtube`)
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch(error){
        console.log("MongoDB connection Failed",error);
        process.exit(1);
    }
}

export default connectDB;