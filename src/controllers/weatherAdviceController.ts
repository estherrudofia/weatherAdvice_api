import { Request, Response } from "express";
import WeatherAdvice from "../models/weatherAdvice";

export const createWeatherAdvice = async (req: Request, res: Response): Promise<void> => {
  try {
    const { location, condition, temperature, advice } = req.body;

    const newAdvice = await WeatherAdvice.create({
      location,
      condition,
      temperature,
      advice,
    });

    res.status(201).json(newAdvice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
