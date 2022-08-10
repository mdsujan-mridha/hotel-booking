import jwt from "jsonwebtoken";
import { createError } from "../errorHandle/error.js";

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.Access_token;
    if(!token){
        return next(createError(401,"Your are hacker"))
    }
    jwt.verify(token,process.env.JWT_TOKEN,(err,user)=>{
        if(err) return next(createError(403,"Token is not valid"))
        
        req.user=user;
        next();
    });
};

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        } else{
            return next(createError(403,"Your are not authorized"))
        }
    });
};

export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.isAdmin){
            next();
        } else{
            return next(createError(403,"Your are not admin"))
        }
    });
}