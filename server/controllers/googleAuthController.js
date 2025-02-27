import User from "../models/User.js";
import generateTokens from "../utils/generateTokens.js";

export const googleAuth = async (req, res) => {
  try {
    const { access_token } = req.body;
    console.log("Google Auth Request:", req.body);

    const googleResponse = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (!googleResponse.ok) {
      return res.status(401).json({ message: "Invalid Google token" });
    }

    const googleUser = await googleResponse.json();
    let user = await User.findOne({
      $or: [{ email: googleUser.email }, { googleId: googleUser.sub }],
    });

    if (!user) {
      user = await User.create({
        email: googleUser.email,
        name: googleUser.name,
        picture: googleUser.picture,
        googleId: googleUser.sub,
      });
    } else if (!user.googleId) {
      user.googleId = googleUser.sub;
      await user.save();
    }

    const { accessToken, refreshToken } = generateTokens(user);
    res.json({
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        picture: user.picture,
      },
    });
  } catch (error) {
    console.log("Google Auth Error:", error);

    res.status(500).json({ message: "Google auth failed", error: error.message });
  }
};
