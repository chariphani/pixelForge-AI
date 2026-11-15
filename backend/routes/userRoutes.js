import { Router } from "express";
import protect from "../middleware/authMiddleware.js";
import { updateProfile, changePassword } from "../controllers/userController.js";

const router = Router();
router.use(protect);
router.patch("/profile", updateProfile);
router.patch("/password", changePassword);
export default router;
