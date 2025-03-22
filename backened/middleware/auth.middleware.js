import jwt from 'jsonwebtoken'
import redisClient from '../services/redis.service.js';

export const authUser =  async (req,res,next) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];
        if (!token) {
            console.log("token not found");
            
            return res.status(401).send({error:'Unauthorized token '});
        }

        const isblackListedToken = await redisClient.get(token)

        if (isblackListedToken) {
            res.cookie(token,'')
            console.log("isblacklisted");
            
            return res.status(401).send({error:'Unauthorized token'})
        }
    
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        
        res.status(401).send({error:'Unauthorized token'})
    }
   
}