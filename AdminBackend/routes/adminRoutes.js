import express from "express";
import { 
  registerAdmin, 
  loginAdmin, 
  logoutAdmin, 
  getAllUsers,
  getUserById,
  deleteUser,
  getAllDoctors,
  getDoctorById,
  deleteDoctor,
  verifyDoctor,
  getAllVerifiedDoctors
} from "../controllers/adminController.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";
import Admin from "../models/Admin.js";

const router = express.Router();

// Register & Login (public)
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);

// Users
router.get("/users", getAllUsers);
router.get("/users/:id", verifyAdmin(Admin), getUserById);
router.delete("/users/:id", verifyAdmin(Admin), deleteUser);

// Doctors routes
router.get("/doctors", getAllDoctors);
router.get("/doctors/:id", verifyAdmin(Admin), getDoctorById);
router.delete("/doctors/:id", verifyAdmin(Admin), deleteDoctor);

// Verify doctor by admin
router.post("/doctors/verify/:id", verifyAdmin(Admin), verifyDoctor);

// API to fetch all verified doctors
router.get("/verified-doctors", getAllVerifiedDoctors);

export default router;
