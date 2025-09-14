import appointmentModel from "../models/appointmentModel.js";
import docModel from "../models/doctorModel.js";

const bookSlot = async (req, res) => {
  try {
    const { userID, docID, slotDate, slotTime, reason } = req.body;

    if (!userID || !docID || !slotDate || !slotTime)
      return res.json({ success: false, message: "All fields required" });

    const doctor = await docModel.findById(docID);

    if (!doctor) return res.json({ success: false, message: "Doctor not found" });

    // check if slot is already booked
    const bookedSlots = doctor.slotsBooked.get(slotDate) || [];
    if (bookedSlots.includes(slotTime))
      return res.json({ success: false, message: "Slot already taken" });

    // create appointment
    const appointment = await appointmentModel.create({
      userID,
      docID,
      slotDate,
      slotTime,
      reason,
    });

    // update doctor's booked slots
    bookedSlots.push(slotTime);
    doctor.slotsBooked.set(slotDate, bookedSlots);
    await doctor.save();

    res.json({ success: true, message: "Slot booked successfully", appointment });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { bookSlot };
