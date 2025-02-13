// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import authRoutes from "./routes/authRoutes.js";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import passport from "passport";
// import session from "express-session";

// import connectDB from "./config/db.config.js";

// const app = express();
// const port = 3000;
// dotenv.config();

// // Middleware
// app.use(express.json());
// app.use(cors());
// app.use(
//   session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true })
// );
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:3000/auth/google/callback",
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log("profile", profile);
//       console.log("done", done);

//       return done(null, profile);
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

// app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/" }),
//   (req, res) => {
//     res.redirect("http://192.168.178.46:8081/"); // Redirect to frontend
//   }
// );

// app.get("/auth/logout", (req, res) => {
//   req.logout(() => {});
//   res.redirect("/");
// });

// connectDB();

// // Routes
// app.get("/api/hello", (req, res) => {
//   res.json({ message: "Hello World!" });
// });

// app.use("/api/auth", authRoutes);

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import passport from "passport";
import session from "express-session";
import connectDB from "./config/db.config.js";
import fetch from "node-fetch"; // Required for making API requests

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

/**
 *  Google OAuth Login via Token (for React Native)
 */
app.post("/auth/google", async (req, res) => {
  try {
    const { access_token } = req.body; // Receive token from frontend

    if (!access_token) {
      return res.status(400).json({ error: "Access token is required" });
    }

    // Verify token with Google
    const googleResponse = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (!googleResponse.ok) {
      return res.status(400).json({ error: "Invalid Google token" });
    }

    const googleUser = await googleResponse.json();

    console.log("Google User:", googleUser);

    // Here, you'd check if the user exists in your database and create one if necessary.
    // Example:
    let user = await findOrCreateUser(googleUser); // Implement this function

    // Create a session or generate a JWT token
    const jwtToken = generateJWT(user); // Implement JWT generation

    res.json({ token: jwtToken, user });
  } catch (error) {
    console.error("Google Auth Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Example function to handle user authentication (adjust this based on your database)
async function findOrCreateUser(googleUser) {
  // Check if user exists in DB, if not, create new user
  // Example using MongoDB (if applicable)
  return {
    id: googleUser.id,
    email: googleUser.email,
    // name: googleUser.name,
    // picture: googleUser.picture,
  };
}

// Example function to generate a JWT token
import jwt from "jsonwebtoken";
function generateJWT(user) {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
}

connectDB();

// Routes
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
