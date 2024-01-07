import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  updateAccountDetails,
  updateUserAvatar,
  updateUserAddress,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyjwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

// Secured Routes //
router.route("/logout").post(verifyjwt, logoutUser);

router.route("refresh-token").post(refreshAccessToken);

router.route("/changePassword").post(verifyjwt, changeCurrentPassword);

router.route("/updateAccountDetails").patch(verifyjwt, updateAccountDetails);

router
  .route("/updateUserAvatar")
  .patch(verifyjwt, upload.single("avatar"), updateUserAvatar);

router.route("/updateUserAddress").patch(verifyjwt, updateUserAddress);

export default router;
