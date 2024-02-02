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
  getFullUserDetails,
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
); //Non-Auth

router.route("/login").post(loginUser); //Non-Auth

// Secured Routes //
router.route("/refreshtoken").post(refreshAccessToken);

router.route("/logout").post(verifyjwt, logoutUser);

router.route("/changePassword").post(verifyjwt, changeCurrentPassword);

router.route("/updateAccountDetails").patch(verifyjwt, updateAccountDetails);

router
  .route("/updateUserAvatar")
  .patch(verifyjwt, upload.single("avatar"), updateUserAvatar);

router.route("/updateUserAddress").patch(verifyjwt, updateUserAddress);

router.route("/getFullUserDetails").get(verifyjwt, getFullUserDetails);

export default router;
