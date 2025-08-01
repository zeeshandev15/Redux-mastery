import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    joinedDate: { type: String, required: true },
    image: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

export const Customer = mongoose.model("Customer", customerSchema);
