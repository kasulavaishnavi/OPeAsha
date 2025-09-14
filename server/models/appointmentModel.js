import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  docID: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  slotDate: { type: String, required: true },
  slotTime: { type: String, required: true },
  userData: { type: Object, required: true },  // snapshot of user info
  docData: { type: Object, required: true },   // snapshot of doctor info
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  cancel: { type: Boolean, default: false },
  payment: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false }
});

const appointmentModel = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);
export default appointmentModel;
