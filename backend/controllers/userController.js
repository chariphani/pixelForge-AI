import bcrypt from "bcryptjs";
import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";

export const updateProfile = asyncHandler(async (req, res) => {
  const name = String(req.body.name || "").trim();
  if (!name) { res.status(400); throw new Error("Name is required"); }
  const user = await User.findByIdAndUpdate(
    req.user._id, { name }, { new: true, runValidators: true }
  );
  res.json({ success: true, user: { id: user._id, name: user.name, email: user.email, createdAt: user.createdAt } });
});

export const changePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword || newPassword.length < 8) {
    res.status(400); throw new Error("Enter your current password and a new password of at least 8 characters");
  }
  const user = await User.findById(req.user._id).select("+password");
  if (!(await bcrypt.compare(currentPassword, user.password))) {
    res.status(400); throw new Error("Current password is incorrect");
  }
  user.password = await bcrypt.hash(newPassword, 12);
  await user.save();
  res.json({ success: true, message: "Password updated successfully" });
});
