import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";
import userModel from "../../models/auth-model/auth.model";

// Schema Validation using Zod
const registerSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    graduation_Year: z.number().int().min(1900).max(new Date().getFullYear()),
    field_of_study: z.string(),
    role: z.enum(["alumni", "student"]),
});

export const register = async (req: Request, res: Response) => {
    try {
        const validatedData = registerSchema.parse(req.body);
        const { name, email, password, graduation_Year, field_of_study, role } = validatedData;

        // Check if email already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "Email already registered.",
                success: false,
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
            graduation_Year,
            field_of_study,
            role,
        });
        await newUser.save();

        return res.status(201).json({
            message: "Account created successfully.",
            success: true,
        });
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                message: "Validation error",
                success: false,
                errors: error.errors, // Zod validation errors
            });
        }
        console.error("Error creating user:", error.message);
        return res.status(500).json({
            message: "Server error occurred.",
            success: false,
            error: error.message,
        });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password, role } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "No account found with this email.",
                success: false,
            });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials", success: false });
        }

        // Ensure correct role
        if (role !== user.role) {
            return res.status(403).json({
                message: "Role mismatch.",
                success: false,
            });
        }

        // Generate JWT
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!, {
            expiresIn: "1d",
        });

        // Send JWT as HTTP-Only cookie for better security
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Secure in production
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        });

        return res.json({
            message: "Login successful.",
            success: true,
            token:token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ 
            message: error, 
            success: false 
        });
    }
};


export const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });

        return res.status(200).json({
            message: "Logged out successfully.",
            success: true,
        });
    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};



