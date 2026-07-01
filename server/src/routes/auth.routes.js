import express from "express";
import protect from "../middleware/auth.middleware.js";
import validate from "../middleware/validate.middleware.js";
import {
  register,
  login,
  getMe,
  logout,
} from "../controllers/auth.controller.js";

import {
  registerSchema,
  loginSchema,
} from "../validators/auth.validator.js";

const router = express.Router();

router.post(
  "/register",
  validate(registerSchema),
  register
);

router.post(
  "/login",
  validate(loginSchema),
  login
);

router.get("/me", protect, getMe);

router.post("/logout", logout);


router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Auth Route Working 🚀",
  });
});

export default router;