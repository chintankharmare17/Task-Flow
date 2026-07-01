import express from "express";

import protect from "../middleware/auth.middleware.js";
import validate from "../middleware/validate.middleware.js";

import {
  requireMember,
  requireAdmin,
  requireOwner,
} from "../middleware/workspace.middleware.js";

import {
  createWorkspaceSchema,
  updateWorkspaceSchema,
} from "../validators/workspace.validator.js";

import {
  createWorkspace,
  getMyWorkspaces,
  getWorkspace,
  updateWorkspace,
  deleteWorkspace,
} from "../controllers/workspace.controller.js";

const router = express.Router();


router.post(
  "/",
  protect,
  validate(createWorkspaceSchema),
  createWorkspace
);


router.get(
  "/",
  protect,
  getMyWorkspaces
);


router.get(
  "/:id",
  protect,
  requireMember,
  getWorkspace
);


router.put(
  "/:id",
  protect,
  requireMember,
  requireAdmin,
  validate(updateWorkspaceSchema),
  updateWorkspace
);


router.delete(
  "/:id",
  protect,
  requireMember,
  requireOwner,
  deleteWorkspace
);

export default router;