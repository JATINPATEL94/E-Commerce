import { Router } from "express";
import { verifyjwt } from "../middlewares/auth.middleware.js";
import {
  getkey,
  makepayment,
  paymentverification,
} from "../controllers/payment.controller.js";

const router = Router();

router.route("/makepayment").post(verifyjwt, makepayment);
router.route("/paymentverification").post(verifyjwt, paymentverification);
router.route("/getkey").get(verifyjwt, getkey);

export default router;
