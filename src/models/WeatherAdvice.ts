import mongoose, { Document, Schema } from "mongoose";

// Define the interface for WeatherAdvice
export interface IWeatherAdvice extends Document {
  location: string;
  condition: string;
  temperature: string;
  advice: string;
}

// Create the schema
const WeatherAdviceSchema: Schema = new Schema(
  {
    location: { type: String, required: true },
    condition: { type: String, required: true },
    temperature: { type: String, required: true },
    advice: { type: String, required: true },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

// Create the model
const WeatherAdvice = mongoose.model<IWeatherAdvice>("WeatherAdvice", WeatherAdviceSchema);

export default WeatherAdvice;
