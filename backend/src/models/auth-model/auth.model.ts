import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    graduation_Year:{type: Number, required: true},
    field_of_study:{type: String, required: true},
    role: { type: String, enum: ["alumni", "student"], requried: true},
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
