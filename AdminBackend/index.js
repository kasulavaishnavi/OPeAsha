import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import adminRoutes from "./routes/adminRoutes.js";
import { connectUsersDB, connectDoctorsDB } from "./config/db.js";

dotenv.config();

const startServer = async () => {
  try {
    if (!process.env.MONGO_URI) throw new Error("MONGO_URI not defined");

    // Connect to Admin DB via mongoose
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Admin MongoDB connected");

    // Connect to other DBs
    const usersDB = await connectUsersDB();
    const doctorsDB = await connectDoctorsDB();

    const app = express();

    const allowedOrigins = [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
    ];

    app.use(
      cors({
        origin: (origin, callback) => {
          if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
          } else {
            callback(new Error("Not allowed by CORS"));
          }
        },
        credentials: true,
      })
    );

    app.use(express.json());

    // Attach DB references to req
    app.use("/api/admin", (req, res, next) => {
      req.usersDB = usersDB;
      req.doctorsDB = doctorsDB;
      req.adminDB = mongoose.connection.db;
      next();
    }, adminRoutes);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

startServer();
