import  express  from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controlors/hotel.js";
import { createError } from "../errorHandle/error.js";
import Hotel from "../models/Hotel.js";

const router = express.Router();

// CREATE 
router.post("/",  createHotel);
// UPDATE 
router.put("/:id",updateHotel )
// DELETE 
router.delete("/:id", deleteHotel);
// GET 
router.get("/:id", getHotel);
// GETALL 
router.get("/", getHotels);
export default router;