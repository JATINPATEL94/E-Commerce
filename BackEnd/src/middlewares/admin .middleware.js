import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const isAdmin = asyncHandler(async (req, res, next) => {
  const findAdmin = await User.findById(req.user?._id);

  if (findAdmin._id.equals("65991efa831bd3c1e2fc78cb")) {
    next();
  } else {
    throw new ApiError(
      400,
      "Permission denied. Only admins can perform this operation."
    );
  }
});
