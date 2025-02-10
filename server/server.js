import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

import connectDB from "./config/db.config.js";

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

dotenv.config();
connectDB();

// Routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
