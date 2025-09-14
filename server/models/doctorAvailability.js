import mongoose from "mongoose";

const doctorAvailabilitySchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  
  date: {
    type: Date, 
    required: true,
  },
  startTime: {
    type: String, 
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  slotDuration: {
    type: Number, 
    default: 30,
  },
});

const DoctorAvailability = mongoose.model("DoctorAvailability", doctorAvailabilitySchema);

export default DoctorAvailability; 