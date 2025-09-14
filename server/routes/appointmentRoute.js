import express from "express";
import { bookSlot } from "../controllers/appointmentController.js";
import authUser from "../middlewares/authUser.js";

const appointmentRouter = express.Router();

appointmentRouter.post("/book", authUser, bookSlot);

export default appointmentRouter;
