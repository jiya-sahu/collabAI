import express from 'express'
import morgan from 'morgan'
import connectDB from './db/db.js';
import userroutes from './routes/user.routes.js'
import cookieParser from 'cookie-parser';
import  projectRoutes from '../backened/routes/project.routes.js'
import cors from 'cors'
const app = express();

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(cors());
app.use('/user',userroutes);
app.use('/projects', projectRoutes);



connectDB();

app.get('/',(req,res)=>{
    res.send('Hello world');
})

export default app;