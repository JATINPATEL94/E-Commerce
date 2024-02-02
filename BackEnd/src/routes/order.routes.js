import { Router } from "express";
import { verifyjwt } from "../middlewares/auth.middleware.js";
import { addNewOrder, getAllOrder } from "../controllers/order.controller.js";

const router = Router();
//> Secured Routes <//
// order  **user**
router.route("/addNewOrder").post(verifyjwt, addNewOrder);
router.route("/getAllOrder").get(verifyjwt, getAllOrder);

export default router;
