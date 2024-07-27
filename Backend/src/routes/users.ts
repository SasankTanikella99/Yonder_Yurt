import express, {Request, Response} from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import { check, validationResult } from "express-validator";

const router = express.Router();

router.post('/register', [
    check("firstName", "First Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password must be at least 8 characters long").isLength({ min: 8 }),

], async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message: errors.array()});
    }
    try{
        // check if user already exists
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({msg: 'User already exists'});
        }
        // create new user and save it to the database
        user = new User(req.body);
        await user.save();

        // create JWT token return it as a part of HTTP cookie
        const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET_KEY as string, {expiresIn: '1d'}  );
        res.cookie('token', token, { 
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            expires: new Date(Date.now() + 86400000), 
            
         }); // 1 ∂ay cookie

        res.json({msg: 'User registered successfully'});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Something went wrong, please try again'});
    }
})

router.post('/')

export default router;