import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { 
  createPrescription, 
  getPrescriptions, 
  getPrescriptionPdf, 
  getPatientPrescriptions 
} from "../controllers/prescriptionController.js";

const router = express.Router();

router.post("/", protect, createPrescription);
router.get("/", protect, getPrescriptions);
router.get("/:id/pdf", protect, getPrescriptionPdf);
router.get("/patient", getPatientPrescriptions);

export default router;
