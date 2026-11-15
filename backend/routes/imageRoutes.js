import { Router } from "express";
import { generateImage, getMyImages, getImageById, deleteImage } from "../controllers/imageController.js";
import protect from "../middleware/authMiddleware.js";
import uploadMiddleware from "../middleware/uploadMiddleware.js";

const router = Router();
router.use(protect);
router.post("/generate", uploadMiddleware, generateImage);
router.get("/", getMyImages);
router.get("/:id", getImageById);
router.delete("/:id", deleteImage);
export default router;
