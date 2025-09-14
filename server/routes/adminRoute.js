import express from "express"
import { addDoc,adminDashboard,adminLogin, allDoc, appointmentCancel, appointmentsAdmin } from "../controllers/adminController.js"
import upload from "../middlewares/multer.js"
import authAdmin from "../middlewares/authAdmin.js"
// import { setAvailability } from "../controllers/docController.js"



const adminRouter = express.Router()

adminRouter.post("/addDoc",authAdmin, upload.single('image') ,addDoc)
adminRouter.post("/adminlogin",adminLogin )
adminRouter.get("/allDoc" , allDoc )
// adminRouter.post("/setAvailability " ,authAdmin, setAvailability );
adminRouter.get("/allAppointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancelAppointment" , authAdmin, appointmentCancel);
adminRouter.get("/dashboard", authAdmin, adminDashboard)



export default adminRouter