import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import imageRoutes from "./routes/imageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();
const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",").map((origin) => origin.trim());

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Origin not allowed by CORS"));
  },
}));
app.use(express.json({ limit: "2mb" }));
app.use("/api/images/generate", rateLimit({ windowMs: 60 * 1000, limit: 5, standardHeaders: true, legacyHeaders: false }));
app.get("/api/health", (req, res) => res.json({ success: true, message: "PixelForge AI API is running" }));
app.use("/api/auth", authRoutes);
app.use("/api/images", imageRoutes);
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => app.listen(PORT, () => console.log(`PixelForge API running on port ${PORT}`)))
  .catch((error) => { console.error("Startup failed:", error.message); process.exit(1); });
