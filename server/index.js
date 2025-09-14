import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/connection.js"
import connectCloudinary from "./config/cloudinary.js"
import adminRouter from "./routes/adminRoute.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import cookieParser from "cookie-parser"
import appointmentRouter from "./routes/appointmentRoute.js"

//app config

const app = express()
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()

//middlewares
app.use(express.json());

const allowedOrigins = ["http://localhost:5173","http://localhost:5174"];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null,true);
        } else {
            callback(new Error ('not allowed by cors'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST','PUT','DELETE'],
}));

app.use(cookieParser());

//apis endpoints
app.use("/api/admin", adminRouter)
app.use("/api/user", userRouter )
app.use("/api/doctor", doctorRouter )
app.use("/api/appoint", appointmentRouter )



app.get("/", (req,res)=>{
    res.send("hello all");
})

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})