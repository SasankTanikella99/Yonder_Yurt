import express , {Request, Response} from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import mongoose from'mongoose';
import userRoutes from './routes/users';
import authRoutes from './routes/auth';
import cookieParser from 'cookie-parser';
import path from 'path';


const envFile = process.env.NODE_ENV === 'e2e' ? '.env.e2e' : '.env';
config({ path: envFile });

mongoose.connect(process.env.MONGODB_URL as string)
.then(() => console.log('MongoDB Connected...'))//, process.env.MONGODB_URL))
.catch((err) => console.error('MongoDB connection error:', err));

const app = express();
app.use(cookieParser()) // parse cookies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(
    {
        origin: process.env.FRONTEND_URL, // replace with your frontend URL
        credentials: true,
    }
))

app.use(express.static(path.join(__dirname, "../../Frontend/dist")))    // serve static files from frontend

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
  });

app.listen(7070, () => {
    console.log('server is running on port 7070... ');
})