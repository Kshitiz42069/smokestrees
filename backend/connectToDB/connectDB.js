import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MongoURI);
        console.log("database is connected");
    } catch (error) {
        console.log("no connection from the database");
    }
}

export default connectDB;