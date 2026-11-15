import mongoose from "mongoose";

const generatedImageSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    prompt: { type: String, required: true, trim: true, maxlength: 1000 },
    imageUrl: { type: String, required: true },
    cloudinaryPublicId: { type: String, required: true },
    model: { type: String, default: "@cf/black-forest-labs/flux-1-schnell" },
  },
  { timestamps: true },
);

export default mongoose.model("GeneratedImage", generatedImageSchema);
