import express from 'express';
import { getAllCategories, createCategory, getDoctorsByCategoryByUUID } from "../controllers/categoryController.js";

const router = express.Router();

router.post('/', createCategory);
router.get('/', getAllCategories);
router.get('/:uuid/doctors', getDoctorsByCategoryByUUID);

export default router;
