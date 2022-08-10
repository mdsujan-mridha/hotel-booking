import  express  from "express";
import { register } from "../controlors/auth.js";

const router = express.Router();



router.post("/register", register );
export default router;