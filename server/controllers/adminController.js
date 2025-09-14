import validator from "validator"
import bcrypt from "bcrypt"
import {v2 as cloudinary} from "cloudinary"
import docModel from "../models/doctorModel.js"
import jwt from "jsonwebtoken"
import appointmentModel from "../models/appointmentModel.js"
import userModel  from "../models/userModel.js"
//adding doc
const addDoc = async (req,res) =>{

    try{

const {name, email, password,phoneNum, speciality, education,experience,about,fee,address, } = req.body
    const imageFile = req.file


    
    if (!name || !phoneNum,!email,!password,!speciality,!education,!experience,!about,!fee,!address){
return res.json({success: false, message:"Missing Details"})
    }

    //validating the phone number 
       if (!validator.isMobilePhone(phoneNum, 'any')) {
            return res.status(400).json({ success: false, message: "Invalid phone number" });
        }
    
            //validating the Email  
       if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Invalid email" });
        }

               //validating password  
       if (password.length < 8) {
            return res.status(400).json({ success: false, message: "please enter strong password" });
        }

        //hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        //upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});
        const imageUrl = imageUpload.secure_url

        const docData = {name,email,image:imageUrl,password:hashedPassword,phoneNum,speciality,education,experience,about,fee,address:JSON.parse(address),date: Date.now()}

        const newDoc = new docModel(docData)
    await newDoc.save();
    res.json({success : true, message: "doctor added"})
}catch(error){
console.log(error)
res.json({success: false, message: error.message})
    }
}

//login
 const adminLogin = async(req,res) =>{
    try{
        const {email, password} = req.body

        if(email === process.env.Admin_EMAIL && password === process.env.ADMIN_PASSWORD) {
const token = jwt.sign(email+password,process.env.JWT_SECRET)
res.json({success: true, token})
        } else{
            res.json({success:false, message: " invalid creds"})
        }

    }catch(error){
        console.log(error)
res.json({success: false, message: error.message})
    }
 }

 //get all doctors
const allDoc = async (req,res) =>{
try{
const doc = await docModel.find({}).select(["-email" ,"-password"])
res.json({success: true, doc})
}catch(error) {
  console.log(error)
res.json({success: false, message: error.message})   
}
} 


//get all appointments
const appointmentsAdmin = async (req,res) =>{
    try{
const appointments = await appointmentModel.find({})
res.json({success: true, appointments})
    }catch(error) {
  console.log(error)
res.json({success: false, message: error.message})   
    }
}

//cancellation 

const appointmentCancel = async (req,res) =>{
    try{
const { appointmentID} = req.body 
const appointmentData = await appointmentModel.findById(appointmentID)

await appointmentModel.findByIdAndUpdate(appointmentID, {cancelled: true})
// releasing doctor slot

const {docID,slotDate,slotTime} = appointmentData
const docData = await docModel.findById(docID)
let slotsBooked = docData.slotsBooked
slotsBooked[slotDate] = slotsBooked[slotDate].filter(e => e !== slotTime)
await docModel.findByIdAndUpdate(docID, {slotsBooked})

res.json({success: true, message: 'appointment cancelled'})


    }catch (error) {
          console.log(error);
        return res.json({ success: false, message: error.message });
    }
}


// dashboard
const adminDashboard = async (req,res)=>{
    try{

const doctors = await docModel.find({})
const users = await userModel.find({})
const appointments = await appointmentModel.find({})

const dashData = {
    doctors : doctors.length,
appointments : appointments.length,
patients: user.length,
latestAppointment: appointments.reverse().slice(0,8)
}
res.json({success:true, dashData})

    } catch(error) {
         console.log(error);
        return res.json({ success: false, message: error.message });
    }
}

export {addDoc,adminLogin,allDoc,appointmentsAdmin, appointmentCancel,adminDashboard } 