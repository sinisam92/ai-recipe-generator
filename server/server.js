import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import passport from "passport";
import session from "express-session";
import connectDB from "./config/db.config.js";

import googleAuthRoute from "./routes/googleAuthRoutes.js";

const app = express();
const port = 3000;
dotenv.config();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log("Headers:", req.headers);
  console.log("Session:", req.session);
  next();
});
app.use(cors());
app.use(
  session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/auth", googleAuthRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
