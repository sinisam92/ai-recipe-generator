import User from "../models/User.js";

export const googleAuth = async (req, res) => {
  console.log("Google Auth Request:", req.body);

  try {
    const { access_token } = req.body;

    const googleResponse = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    console.log("Google Response:", googleResponse);

    if (!googleResponse.ok) {
      return res.status(401).json({ error: "Invalid Google token" });
    }

    const googleUser = await googleResponse.json();
    console.log("Google User:", googleUser);

    const user = await findOrCreateUser({
      id: googleUser.sub,
      email: googleUser.email,
      name: googleUser.name,
      picture: googleUser.picture,
    });

    console.log("User:", user);

    const token = generateJWT(user);

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        picture: user.picture,
      },
    });
  } catch (error) {
    console.error("Google Auth Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

async function findOrCreateUser(googleUser) {
  const existingUser = await User.findOne({
    $or: [{ email: googleUser.email }, { googleId: googleUser.id }],
  });

  if (existingUser) {
    if (!existingUser.googleId) {
      existingUser.googleId = googleUser.id;
      await existingUser.save();
    }
    return existingUser;
  }

  return User.create({
    email: googleUser.email,
    name: googleUser.name,
    picture: googleUser.picture,
    googleId: googleUser.id,
  });
}

//  generate a JWT token
import jwt from "jsonwebtoken";
function generateJWT(user) {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
}
