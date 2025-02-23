import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./config/db";


dotenv.config();
connectDB();  // Database connection

const app = express();
app.use(cors());    // Allows cross-origin requests
app.use(helmet());  // Adds security headers
app.use(morgan("dev")); // Logs requests
app.use(express.json()); // Parses JSON data

// Routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
