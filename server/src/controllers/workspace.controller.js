import Workspace from "../models/Workspace.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";

//crt wrkspace
export const createWorkspace = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const workspace = await Workspace.create({
    name,
    description,
    owner: req.user._id,
    members: [
      {
        user: req.user._id,
        role: "owner",
      },
    ],
  });

  return res.status(201).json(
    new ApiResponse(
      201,
      workspace,
      "Workspace created successfully"
    )
  );
});

//all workspace
export const getMyWorkspaces = asyncHandler(async (req, res) => {
  const workspaces = await Workspace.find({
    "members.user": req.user._id,
  })
    .populate("owner", "name email avatar")
    .populate("members.user", "name email avatar");

  return res.status(200).json(
    new ApiResponse(
      200,
      workspaces,
      "Workspaces fetched successfully"
    )
  );
});
//gt sngle workspace

export const getWorkspace = asyncHandler(async (req, res) => {

  return res.status(200).json(
    new ApiResponse(
      200,
      req.workspace,
      "Workspace fetched successfully"
    )
  );

});


//upd
export const updateWorkspace = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const workspace = req.workspace;

  if (!workspace) {
    throw new ApiError(404, "Workspace not found");
  }

  if (name) workspace.name = name;

  if (description !== undefined)
    workspace.description = description;

  await workspace.save();

  return res.status(200).json(
    new ApiResponse(
      200,
      workspace,
      "Workspace updated successfully"
    )
  );
});

//del
export const deleteWorkspace = asyncHandler(async (req, res) => {
  const workspace = req.workspace;

  if (!workspace) {
    throw new ApiError(404, "Workspace not found");
  }

  await workspace.deleteOne();

  return res.status(200).json(
    new ApiResponse(
      200,
      null,
      "Workspace deleted successfully"
    )
  );
});