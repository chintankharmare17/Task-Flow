import Workspace from "../models/Workspace.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";

export const requireMember = asyncHandler(async (req, res, next) => {
  const workspace = await Workspace.findById(req.params.id)
  .populate("owner", "name email avatar")
  .populate("members.user", "name email avatar");

  if (!workspace) {
    throw new ApiError(404, "Workspace not found");
  }

  const member = workspace.members.find(
  (m) => m.user._id.toString() === req.user._id.toString()
);

  if (!member) {
    throw new ApiError(
      403,
      "You are not a member of this workspace"
    );
  }

  req.workspace = workspace;
  req.memberRole = member.role;

  next();
});



export const requireAdmin = (req, res, next) => {
  if (
    req.memberRole !== "admin" &&
    req.memberRole !== "owner"
  ) {
    throw new ApiError(
      403,
      "Admin access required"
    );
  }

  next();
};



export const requireOwner = (req, res, next) => {
  if (req.memberRole !== "owner") {
    throw new ApiError(
      403,
      "Only workspace owner can perform this action"
    );
  }

  next();
};