import mongoose from "mongoose";
import { ENV } from "./env";

export const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URI)
        console.log("MongoDB connected.")
    } catch (error) {
        console.log("Error connecting mongodb")
        process.exit(1)
    }
}