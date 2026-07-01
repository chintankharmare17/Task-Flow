import User from "../models/User.js";

export const getProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user._id).select("-password");

    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const updateProfile = async (req, res) => {

  try {

    const { name } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {

      return res.status(404).json({
        success: false,
        message: "User not found",
      });

    }

    user.name = name || user.name;

    await user.save();

    res.json({
      success: true,
      message: "Profile Updated",
      user,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};