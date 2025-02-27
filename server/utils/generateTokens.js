// utils/jwt.js
import jwt from "jsonwebtoken";

const generateTokens = (user) => {
  try {
    console.log("Generating tokens for user:", user);

    if (!user || !user._id || !user.email) {
      throw new Error("Invalid user object: missing _id or email");
    }

    if (!process.env.JWT_SECRET || !process.env.JWT_REFRESH_SECRET) {
      throw new Error("JWT secrets are not configured in environment variables");
    }

    const accessToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "7d",
    });

    console.log("Tokens generated successfully");
    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Error in generateTokens:", error.message);
    throw new Error("Failed to generate tokens: " + error.message);
  }
};

export default generateTokens;
