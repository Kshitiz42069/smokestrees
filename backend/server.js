import express from 'express'
import connectDB from './connectToDB/connectDB.js';
import dotenv from 'dotenv';
import register from './routes/register.js'

dotenv.config();


const app = express();

app.use(express.json());

app.use('/api',register);

const PORT = process.env.PORT || 2000;
app.listen(PORT, ()=>{
    connectDB();
    console.log("connected to mongoDB and running on ",PORT);
})