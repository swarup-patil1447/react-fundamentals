import express from 'express'; import mongoose from 'mongoose'; import cors from 'cors'; import dotenv from 'dotenv'; import tasks from './routes/tasks.js';
dotenv.config(); const app=express(); app.use(cors()); app.use(express.json()); app.get('/',(_req,res)=>res.json({message:'To-Do API is running'})); app.use('/api/tasks',tasks);
const PORT=process.env.PORT||5001; mongoose.connect(process.env.MONGODB_URI).then(()=>app.listen(PORT,()=>console.log(`To-Do API running on ${PORT}`))).catch(e=>{console.error('MongoDB connection failed:',e.message);process.exit(1)});
