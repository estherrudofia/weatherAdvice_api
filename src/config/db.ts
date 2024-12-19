import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();


export const connectDB = async (): Promise<void> => {
    const mongoURI = process.env.MONGO_URI;
  
    if (!mongoURI) {
      throw new Error("MONGO_URI is not defined in the environment variables");
    }
  
    try {
      await mongoose.connect(mongoURI); // No need for `useNewUrlParser` or `useUnifiedTopology`
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error("MongoDB connection error:", error);
      process.exit(1); // Exit process with failure
    }
};

