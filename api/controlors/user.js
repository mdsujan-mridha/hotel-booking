// create a new User 

import User from "../models/User.js";



// update a User information 
export const updateUser = async(req,res,next)=>{
    const newUser = new User(req.body) 
    try{
         const updateUser = await User.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new:true}
            );
         res.status(200).json(updateUser)
      }catch(err){
          next(err)
      }
    
};

// delete any User 
export const deleteUser = async(req,res,next)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
     }catch(err){
         next(err)
     }
};

// get one User 
export const getUser = async(req,res,next)=>{
    try{
        const user= await User.findById(req.params.id);
         res.status(200).json(user);
      }catch(err){
        next(err)
      }
};

// get all User 
export const getUsers = async(req,res,next)=>{
    try{
        const users = await User.find();
         res.status(200).json(users);
      }catch(err){
          next(err)
      }
};