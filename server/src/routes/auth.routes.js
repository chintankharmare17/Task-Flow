import express from "express";
import protect from "../middleware/auth.middleware.js";
import {
  register,
  login,
  getMe,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);
router.get("/me", protect, getMe);
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Auth Route Working 🚀",
  });
});

export default router;