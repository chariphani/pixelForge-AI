import GeneratedImage from "../models/GeneratedImage.js";
import asyncHandler from "../utils/asyncHandler.js";
import { generateWithCloudflare, MODEL } from "../services/aiImageService.js";
import {
  uploadImageBuffer,
  deleteStoredImage,
} from "../services/cloudStorageService.js";

export const generateImage = asyncHandler(async (req, res) => {
  const prompt = String(req.body.prompt || "").trim();
  if (!prompt) {
    res.status(400);
    throw new Error("Please enter an image prompt");
  }
  if (prompt.length > 1000) {
    res.status(400);
    throw new Error("Prompt must be 1,000 characters or fewer");
  }

  const buffer = await generateWithCloudflare(prompt);
  if (!buffer?.length)
    throw new Error("The AI provider returned an empty image");
  const stored = await uploadImageBuffer(buffer);
  const image = await GeneratedImage.create({
    user: req.user._id,
    prompt,
    imageUrl: stored.url,
    cloudinaryPublicId: stored.publicId,
    model: MODEL,
  });

  res.status(201).json({ success: true, image });
});

export const getMyImages = asyncHandler(async (req, res) => {
  const page = Math.max(1, Number(req.query.page) || 1);
  const limit = Math.min(30, Math.max(1, Number(req.query.limit) || 12));
  const filter = { user: req.user._id };
  const [images, total] = await Promise.all([
    GeneratedImage.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit),
    GeneratedImage.countDocuments(filter),
  ]);
  res.json({
    success: true,
    images,
    page,
    pages: Math.ceil(total / limit),
    total,
  });
});

export const getImageById = asyncHandler(async (req, res) => {
  const image = await GeneratedImage.findOne({
    _id: req.params.id,
    user: req.user._id,
  });
  if (!image) {
    res.status(404);
    throw new Error("Image not found");
  }
  res.json({ success: true, image });
});

export const deleteImage = asyncHandler(async (req, res) => {
  const image = await GeneratedImage.findOne({
    _id: req.params.id,
    user: req.user._id,
  });
  if (!image) {
    res.status(404);
    throw new Error("Image not found");
  }
  await deleteStoredImage(image.cloudinaryPublicId);
  await image.deleteOne();
  res.json({ success: true, message: "Image deleted" });
});
