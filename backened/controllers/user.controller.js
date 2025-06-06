import usermodel from '../models/user.model.js'
import * as userServices from '../services/user.services.js'
import {validationResult} from 'express-validator'
import redisClient from '../services/redis.service.js'

export const createUserController = async (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
       return  res.status(400).json({errors :errors.array()})
    }

    try {
        const user = await userServices.createUser(req.body)
        const token =  user.generateJWT();
        delete user._doc.password
        res.status(201).json({user,token});
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const loginUserController = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return  res.status(400).json({errors :errors.array()}) 
    }
    try {
        const {email , password} = req.body;
        const user = await usermodel.findOne({email}).select('+password');
        if (!user) {
            return res.status(401).json({errors:'invalid Credentials'})
        }

        const isMatch = await user.isValidPassword(password);
        if(!isMatch){
           return  res.status(401).json({errors:"passwords doent match"});
        }

        const token = user.generateJWT();
        delete user._doc.password;
        res.status(201).json({user,token});
        console.log(user);
        


    } catch (error) {
         res.status(400).send(error.message);
    }
}

export const profileController = async (req,res) => {
    res.status(200).json({
        user:req.user
    })
}

export const logoutController = async (req,res) => {
    try {
        
        const token = req.cookies.token|| req.headers.authorization.split(' ')[1]
        redisClient.set(token,'logout','Ex',60*60*24)
        res.status(200).json({
            message:"Logged out succesfully"
        })
    } catch (error) {
        res.status(400).send(error);
    }
}

export const getAllUsersController = async (req,res) => {
    try {
        const loggedInUser = await usermodel.findOne({email:req.user.email})
        const userId = loggedInUser._id;

        const allusers  = await userServices.getAllUsers({userId});
        return res.status(200).json({users:allusers})
    } catch (err) {
        console.log(err);
         res.status(400).json({error:err.message})
        
    }
}