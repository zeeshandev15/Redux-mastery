import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URI);
    console.log("🚀 ~ connectDB ~ con:", con.connection.host);
  } catch (error) {
    console.error("🚀 ~ connectDB ~ error:", error.message);
    console.error(`Stack trace: ${error.stack}`);
    process.exit(1);
  }
};

export default connectDB;
