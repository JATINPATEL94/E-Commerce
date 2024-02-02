import { Router } from "express";
import {
  getAllProducts,
  serchProducts,
  addNewProduct,
  updateProduct,
  deleteProduct,
  addToCartProducts,
  getAllCartProducts,
  removeCartProduct,
  updateCartQuantity,
  addToLikeProducts,
  getAllLikeProducts,
} from "../controllers/product.controller.js";
import { verifyjwt } from "../middlewares/auth.middleware.js";
import { isAdmin } from "../middlewares/admin .middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

//> Non-Auth Routes <//

// Product
router.route("/getAllProducts").get(getAllProducts);

router.route("/serchProducts").get(serchProducts);

//> Secured Routes <//

// Product  **Admin**
router
  .route("/addNewProduct")
  .post(verifyjwt, isAdmin, upload.single("productImage"), addNewProduct);

router
  .route("/updateProduct")
  .patch(verifyjwt, isAdmin, upload.single("productImage"), updateProduct);

router.route("/deleteProduct").delete(verifyjwt, isAdmin, deleteProduct);

// Cart  **user**
router.route("/addToCartProducts").post(verifyjwt, addToCartProducts);

router.route("/getAllCartProducts").get(verifyjwt, getAllCartProducts);

router.route("/removeCartProduct").delete(verifyjwt, removeCartProduct);

router.route("/updateCartQuantity").patch(verifyjwt, updateCartQuantity);

// Wishlist **user**
router.route("/addToLikeProducts").post(verifyjwt, addToLikeProducts);

router.route("/getAllLikeProducts").get(verifyjwt, getAllLikeProducts);

export default router;
