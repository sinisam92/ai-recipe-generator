import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import passport from "passport";
import session from "express-session";
import connectDB from "./config/db.config.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import googleAuthRoute from "./routes/googleAuthRoutes.js";
import authMiddleware from "./middleware/auth.js";

const app = express();
const port = 3000;
dotenv.config();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
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
app.use("/api/recipes", recipeRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
