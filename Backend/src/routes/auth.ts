import express, {Request, Response} from 'express';
import {check, validationResult } from "express-validator";
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import verifyToken from '../middleware/auth';

const router = express.Router();

router.post('/login', [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password must be 8 characters atleast').isLength({min:8}),
], async (req: Request, res: Response) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message: errors.array()});
    }

    const {email, password} = req.body;
    try{
        // find user by email
        const user = await User.findOne({ email})
        if(!user){
            return res.status(401).json({msg: 'Invalid credentials'});
        }

        // check if password matches
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(401).json({msg: 'Invalid credentials'});
        }

        const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET_KEY as string, {expiresIn: '1d'});
        res.cookie('auth_token', token, {httpOnly: true, secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 86400000});
        res.status(200).json({msg: 'User logged in successfully', userId: user._id});
    }catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Something went wrong, please try again'});
    }
})

router.get('/validate-token', verifyToken, (req:Request, res:Response) => {
    res.status(200).json({userId: req.userId});
})

router.get('/login', async (req: Request, res: Response) => {
    
})

router.post('/logout', (req:Request, res: Response) => {
    res.cookie('auth_token', '', {expires: new Date(0)});
    res.send()
})
export default router;