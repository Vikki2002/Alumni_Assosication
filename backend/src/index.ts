import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import expressProxy from "express-http-proxy"
import connectDB from "./config/db";

import authRoute from "./routes/auth-route/auth.routes"

dotenv.config();

const app = express();
connectDB();

app.use(cors());    // Allows cross-origin requests
app.use(helmet());  // Adds security headers
app.use(morgan("dev")); // Logs requests
app.use(express.json()); // Parses JSON data
app.use(express.urlencoded({extended:true}))

app.use("/user", expressProxy("http://localhost:5001", {
    proxyReqPathResolver: (req) => req.url.replace("/auth", "")
}));

app.use("/auth", authRoute)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
