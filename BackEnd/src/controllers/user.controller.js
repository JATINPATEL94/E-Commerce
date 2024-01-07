import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Address } from "../models/address.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken(); // call method from user.model
    const refreshToken = user.generateRefreshToken(); // call method from user.model

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something Went Wrong While Generating Access & Referesh Token "
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  // get user details from request body
  const { username, email, password } = req.body;

  // validation
  if (
    [username, email, password].some((field) => {
      return field.trim() === "";
    })
  ) {
    throw new ApiError(400, "All Fields Are Required");
  }

  // check if user already exists : Email
  const existedUser = await User.findOne({ email });
  if (existedUser) {
    throw new ApiError(
      409,
      "This Email Already Exist. Please Clike On Login Link For Login"
    );
  }

  // avatar upload in cloudinary
  const avatarLocalPath = req.files?.avatar[0]?.path; //get local avatar file
  if (!avatarLocalPath) {
    throw new ApiError(400, "Add Avatar");
  }
  const avatar = await uploadOnCloudinary(avatarLocalPath); // call cloudinary utils
  if (!avatar.url) {
    throw new ApiError(400, "Error While Avatar File is Uploading");
  }

  // create user object
  const user = await User.create({
    username,
    email: email.toLowerCase(),
    password,
    avatar: avatar.url,
  });

  //refresh token fild from response: -password
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "Someing Went Wrong While Registering The User");
  }

  // return response
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User Registerd Successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  // get user data from request body
  const { email, password } = req.body;

  // email and password validation
  if (
    [email, password].some((field) => {
      return field.trim() === "";
    })
  ) {
    throw new ApiError(400, "Email And Password Are Required");
  }

  // find the user
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(404, "User Dose Not Exit");
  }

  // password cheking
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(404, "Please Enter Correect Password");
  }

  // access and referesh token
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  // send cookie
  const loggedinUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: false,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        { user: loginUser, accessToken, refreshToken },
        "User Logged In Successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  // clear accessToken
  await User.findByIdAndUpdate(
    req.user._id,
    {
      // req.user._id is from auth.middleware as verifyjwt
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  // clear Cookies
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User Logged Out"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const oldRefreshToken = req.cookie.refreshToken || req.body.refreshToken;

  if (!oldRefreshToken) {
    throw new ApiError(401, "Unauthorized Request");
  }

  try {
    const decodedToken = jwt.verify(
      oldRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalide Refresh Token");
    }

    if (oldRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh Token Expired Or Used");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshTokens(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access Token Refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid Refresh Token");
  }
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;

  const user = await User.findById(req.user?._id); // get user from auth.middleware.js

  if (!(newPassword === confirmPassword)) {
    throw new ApiError(400, "New Password And Confirm Password is Not Same");
  }

  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Invalid Old Password");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password Save Successfully"));
});

const updateAccountDetails = asyncHandler(async (req, res) => {
  // get username and email form request.body
  const { username, email } = req.body;

  // Cheak Enter Email id Allready Exist or Not
  const existedUser = await User.findOne({ email });
  if (existedUser) {
    throw new ApiError(
      409,
      "This Email Already Exist. Please Enter Other Email Id"
    );
  }

  // Find User Id And Updead It
  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        username,
        email,
      },
    },
    { new: true }
  ).select("-password");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Account Details Updated Successfully"));
});

const updateUserAvatar = asyncHandler(async (req, res) => {
  const avatarLocalpath = req.file?.path;
  if (!avatarLocalpath) {
    throw new ApiError(400, "Avatar File Is Missing");
  }
  const avatar = await uploadOnCloudinary(avatarLocalpath);

  if (!avatar.url) {
    throw new ApiError(400, "Error While Uploading Avatar");
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        avatar: avatar.url,
      },
    },
    { new: true }
  ).select("-password");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Avatar Uploading Successfully"));
});

const updateUserAddress = asyncHandler(async (req, res) => {
  // get all details for request.body
  const {
    fullName,
    mobileNumber,
    building,
    street,
    city,
    pinCode,
    state,
    country,
  } = req.body;

  // validation
  if (
    [
      fullName,
      mobileNumber,
      building,
      street,
      city,
      pinCode,
      state,
      country,
    ].some((field) => {
      return field?.trim() === "";
    })
  ) {
    throw new ApiError(400, "Fields Are Required");
  }

  // Update user's address
  const updatedAddress = await Address.findOneAndUpdate(
    req.user?._id,
    {
      fullName,
      mobileNumber,
      building,
      street,
      city,
      pinCode,
      state,
      country,
    },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  if (!updatedAddress) {
    throw new ApiError(400, "Failed to update user address");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedAddress, "Address Update Successfully."));
});

export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  updateAccountDetails,
  updateUserAvatar,
  updateUserAddress,
};
