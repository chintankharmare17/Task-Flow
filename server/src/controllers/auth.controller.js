import bcrypt from "bcrypt";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import cookieOptions from "../utils/cookieOptions.js";


export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(400, "Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = generateToken(user._id);

res.cookie(
    "token",
    token,
    cookieOptions
);

return res.status(201).json(
    new ApiResponse(
        201,
        {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        },
        "Registration Successful"
    )
);
});


export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(400, "Invalid Credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new ApiError(400, "Invalid Credentials");
  }

  const token = generateToken(user._id);

res.cookie(
    "token",
    token,
    cookieOptions
);

return res.status(200).json(
    new ApiResponse(
        200,
        {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        },
        "Login Successful"
    )
);
});



export const getMe = asyncHandler(async (req, res) => {
  return res.status(200).json(
    new ApiResponse(
      200,
      req.user,
      "User fetched successfully"
    )
  );
});



export const logout = asyncHandler(async (req, res) => {
  res.clearCookie(
    "token",
    cookieOptions
);

return res.status(200).json(
    new ApiResponse(
        200,
        null,
        "Logout Successful"
    )
);
});