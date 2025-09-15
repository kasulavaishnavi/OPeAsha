import mongoose from "mongoose";

let usersConnection;
let doctorsConnection;

// Connect to Users DB
export const connectUsersDB = async () => {
  if (!usersConnection) {
    if (!process.env.USER_URI) {
      throw new Error("USER_URI is not defined in .env");
    }
    usersConnection = await mongoose.createConnection(process.env.USER_URI);
    console.log("Users DB connected");
  }
  return usersConnection;
};

// Connect to Doctors DB
export const connectDoctorsDB = async () => {
  if (!doctorsConnection) {
    if (!process.env.DOCTOR_URI) {
      throw new Error("DOCTOR_URI is not defined in .env");
    }
    doctorsConnection = await mongoose.createConnection(process.env.DOCTOR_URI);
    console.log("Doctors DB connected");
  }
  return doctorsConnection;
};
