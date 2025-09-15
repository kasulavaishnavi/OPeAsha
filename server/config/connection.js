// connection.js
import mongoose from "mongoose";

let usersConnection;
let doctorsConnection;

const connectDB = async () => {
  if (!usersConnection) {
    usersConnection = await mongoose.createConnection(process.env.USER_URI);
    console.log("Users DB connected");
  }
  if (!doctorsConnection) {
    doctorsConnection = await mongoose.createConnection(process.env.DOCTOR_URI);
    console.log("Doctors DB connected");
  }
  return { usersConnection, doctorsConnection };
};

export default connectDB;
