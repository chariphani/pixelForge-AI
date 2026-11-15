import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import asyncHandler from "../utils/asyncHandler.js";

const safeUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  createdAt: user.createdAt,
});

export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name?.trim() || !email?.trim() || !password) {
    res.status(400); throw new Error("Name, email, and password are required");
  }
  if (password.length < 8) {
    res.status(400); throw new Error("Password must be at least 8 characters");
  }
  const normalizedEmail = email.toLowerCase().trim();
  if (await User.findOne({ email: normalizedEmail })) {
    res.status(409); throw new Error("An account with this email already exists");
  }
  const user = await User.create({
    name: name.trim(),
    email: normalizedEmail,
    password: await bcrypt.hash(password, 12),
  });
  res.status(201).json({ success: true, token: generateToken(user._id), user: safeUser(user) });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400); throw new Error("Email and password are required");
  }
  const user = await User.findOne({ email: email.toLowerCase().trim() }).select("+password");
  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.status(401); throw new Error("Invalid email or password");
  }
  res.json({ success: true, token: generateToken(user._id), user: safeUser(user) });
});

export const getMe = asyncHandler(async (req, res) => {
  res.json({ success: true, user: safeUser(req.user) });
});
