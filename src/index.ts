import * as express from 'express';
import { validateEnv } from "./utils/validateEnv";
import { connectDB } from "./config/db";

const app = express();

// Middleware (e.g., body-parser)
app.use(express.json());

// Connect to the database
connectDB();

// Validate environment variables
validateEnv();

// Define routes here (example)
app.get("/", (req, res) => {
  res.send("Weather Advice API is running...");
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

