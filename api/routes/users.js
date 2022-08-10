import  express  from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controlors/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../verifyToken/verifyToken.js";

const router = express.Router();

// router.get("/checkauth",verifyToken,(req,res,next)=>{
//    res.send("Hello! user you are logged in")
// });
// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello! user you are logged in you can delete your account");
//  });
//  router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello! you are admin you can delete all account");
//  });

// UPDATE 
router.put("/:id", verifyUser, updateUser)
// DELETE 
router.delete("/:id", verifyUser, deleteUser);
// GET 
router.get("/:id",verifyUser, getUser);
// GETALL 
router.get("/", verifyAdmin, getUsers);

export default router;