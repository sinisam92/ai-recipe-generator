// import { Schema, model } from "mongoose";
// import bcrypt from "bcryptjs";

// const userSchema = new Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     // required: true,
//     // select: false,
//   },
//   name: {
//     type: String,
//   },
//   picture: String,
//   googleId: {
//     type: String,
//     unique: true,
//     sparse: true,
//   },
//   timestamps: true,
// });

// userSchema.pre("save", function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// userSchema.methods.comparePassword = async function (candidatePassword) {
//   if (!this.password) {
//     throw new Error("User password not set");
//   }
//   return bcrypt.compare(candidatePassword, this.password);
// };

// const User = model("User", userSchema);

// export default User;
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      // required: true,
      // select: false,
    },
    name: {
      type: String,
    },
    picture: String,
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  { timestamps: true }
);

// Ensure password comparison method exists
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
