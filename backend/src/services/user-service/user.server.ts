import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser"
import dotenv from "dotenv";
import connectDB from "../../config/db";
dotenv.config();

const app = express();
connectDB();

app.use(cors());    // Allows cross-origin requests
app.use(helmet());  // Adds security headers
app.use(morgan("dev")); // Logs requests
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));



const PORT = 5001;
app.listen(PORT, () => console.log("User Service running on port 5001"));