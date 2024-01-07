import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { LikedProduct } from "../models/likedProduct.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Product } from "../models/product.model.js";
import { Cart } from "../models/cart.model.js";

// Product
const addNewProduct = asyncHandler(async (req, res) => {
  // get product details from request.body
  const {
    name,
    description,
    mrp,
    price,
    // brand,
    // category,
    colors,
    sizes,
    stock,
    rating,
  } = req.body;

  //   Validation
  if (
    [
      name,
      description,
      mrp,
      price,
      // brand,
      // category,
      colors,
      sizes,
      stock,
      rating,
    ].some((field) => {
      return field?.trim() === "";
    })
  ) {
    throw new ApiError(400, "All Fields Are Required");
  }

  // Product Image Local Path For upload in cloudinary
  const productImageLocalPatch = req.file?.path;
  if (!productImageLocalPatch) {
    throw new ApiError(404, "Please Upload Product Images");
  }

  // Product Image upload in cloudinary
  const productImage = await uploadOnCloudinary(productImageLocalPatch);
  if (!productImage.url) {
    throw new ApiError(
      400,
      "Something Went Worng when Image Uploading In The Cloud"
    );
  }

  // Creact Product
  const product = await Product.create({
    name,
    description,
    productImage: productImage.url,
    mrp,
    price,
    // brand,
    // category,
    colors,
    sizes,
    stock,
    rating,
  });

  if (!product) {
    throw new ApiError(400, "Somthing Went worng When Adding Product");
  }

  res
    .status(200)
    .json(new ApiResponse(200, product, "Product Adding successfully"));
});

const updateProduct = asyncHandler(async (req, res) => {
  // get product details from request.body
  const {
    name,
    description,
    mrp,
    price,
    // brand,
    // category,
    colors,
    sizes,
    stock,
    rating,
  } = req.body;

  //   Validation
  if (
    [
      name,
      description,
      mrp,
      price,
      // brand,
      // category,
      colors,
      sizes,
      stock,
      rating,
    ].some((field) => {
      return field?.trim() === "";
    })
  ) {
    throw new ApiError(400, "All Fields Are Required");
  }

  // Product Image Local Path For upload in cloudinary
  const productImageLocalPatch = req.file?.path;
  let productImage;
  if (productImageLocalPatch) {
    // Product Image upload in cloudinary
    productImage = await uploadOnCloudinary(productImageLocalPatch);
    if (!productImage.url) {
      throw new ApiError(
        400,
        "Something Went Worng when Image Uploading In The Cloud"
      );
    }
  }

  const updateProduct = await Product.findOneAndUpdate(
    { _id: req.body?._id },
    {
      name,
      description,
      productImage: productImage?.url,
      mrp,
      price,
      // brand,
      // category,
      colors,
      sizes,
      stock,
      rating,
    },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  if (!updateProduct) {
    throw new ApiResponse(401, "Faild To Update Product Details.");
  }

  res
    .status(200)
    .json(new ApiResponse(200, updateProduct, "Product Update Successfully"));
}); //** Admin **//

const deleteProduct = asyncHandler(async (req, res) => {
  const { productId } = req.body;

  if (!productId) {
    throw new ApiError(404, "Product ID Is Requride");
  }

  const deleteProduct = await Product.deleteOne({
    _id: productId,
  });

  if (deleteProduct.deletedCount === 0) {
    throw new ApiError(400, "Product Not Found! or Alredy Deleted");
  }

  res
    .status(200)
    .json(new ApiResponse(200, {}, "Product Successfully Deleted"));
}); //** Admin **//

const getAllProducts = asyncHandler(async (req, res) => {
  const allProducts = await Product.find();
}); //** Admin **//

// Cart
const addToCartProducts = asyncHandler(async (req, res) => {
  // get data from request.body
  const { productId, quantity } = req.body;

  // Validation
  if (!productId || !quantity) {
    throw new ApiError(400, "Both productId and quantity are required");
  }

  //Chek Product Quantity in Stock Or Not
  const productStock = await Product.findOne({
    _id: productId,
  });

  if (productStock.stock === 0) {
    throw new ApiError(200, "Out Of Stok");
  }
  if (productStock.stock < quantity) {
    throw new ApiError(
      200,
      "Requested quantity exceeds available stock for the product"
    );
  } else {
    await Product.updateOne(
      { _id: productId },
      { $set: { stock: productStock.stock - quantity } }
    );
  }

  // Find User Cart or create a new one if it doesn't exist
  let userCart = await Cart.findOne({ user: req.user?._id });
  if (!userCart) {
    userCart = await Cart.create({
      user: req.user?._id,
      items: [],
    });
  }
  if (!userCart) {
    throw new ApiError(400, "Some Error Occurred When Finding User In Cart");
  }

  // Checking if the product is already added to the cart
  const existingItemIndex = userCart.items.findIndex(
    (item) => item.productId.toString() === productId.toString()
  );

  // If productId is not in cart, add the product to the cart
  if (existingItemIndex === -1) {
    userCart.items.push({
      productId: productId,
      quantity: quantity,
    });

    const addToCart = await userCart.save();
    if (!addToCart) {
      throw new ApiError(
        400,
        "Some error Occurred when Product Adding In Cart"
      );
    }

    return res
      .status(200)
      .json(
        new ApiResponse(200, addToCart, "Product Successfully Adding in Cart")
      );
  }

  // If ProductId Already In Cart, Updating Product Quantity
  userCart.items[existingItemIndex].quantity += quantity; // Update the quantity
  const updateCartProduct = await userCart.save();

  if (!updateCartProduct) {
    throw new ApiError(
      400,
      "Some Error Occurred When Updating Product In Cart"
    );
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updateCartProduct, "Product Updating In Cart"));
}); //** User **//

const getAllCartProducts = asyncHandler(async (req, res) => {
  //   Get User Cart Products
  const CartProducts = await Cart.find({
    user: req.user?._id || "658091a9c1e52604cf652396",
  }).populate("items.productId");
  if (!CartProducts.length) {
    throw new ApiError(404, "No Product in Your Cart");
  }
  res
    .status(200)
    .json(
      new ApiResponse(200, CartProducts, "All Cart Product Find Successfully")
    );
}); //** User **//

const removeCartProduct = asyncHandler(async (req, res) => {
  const { productId } = req.body;

  // Check if the product exists in the user's cart
  const userCart = await Cart.findOne({
    user: req.user?._id,
    "items.productId": productId,
  });

  if (!userCart) {
    throw new ApiError(400, "Product Not Found in Cart");
  }

  // Remove the product from the cart
  const removeProduct = await Cart.updateOne(
    {
      user: req.user?._id,
    },
    {
      $pull: {
        items: {
          productId: productId,
        },
      },
    }
  );

  if (!removeProduct || removeProduct.modifiedCount === 0) {
    throw new ApiError(400, "Failed to Remove Product from Cart");
  }

  res
    .status(200)
    .json(new ApiResponse(200, {}, "Product Remove Successfully In Your Cart"));
}); //** User **//

const updateCartQuantity = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;

  // validiation
  if (!productId || !quantity) {
    throw new ApiError(400, "ProductId And Quantity Are Required");
  }

  //Chek Product Quantity in Stock Or Not
  const productStock = await Product.findOne({
    _id: productId,
  });

  if (productStock.stock === 0) {
    throw new ApiError(200, "Out Of Stok");
  }
  if (productStock.stock < quantity) {
    throw new ApiError(
      200,
      "Requested quantity exceeds available stock for the product"
    );
  } else {
    await Product.updateOne(
      { _id: productId },
      { $set: { stock: productStock.stock - quantity } }
    );
  }

  // Find Product In Cart

  const userCart = await Cart.findOne({
    user: req.user?._id,
    "items.productId": productId,
  });

  if (!userCart) {
    throw new ApiError(401, "Product Not Found In Cart");
  }

  const updateQuantity = await Cart.updateOne(
    { user: req.user?._id, "items.productId": productId },
    {
      $set: {
        "items.$.quantity": quantity,
      },
    }
  );

  if (!updateQuantity || updateQuantity.nModified === 0) {
    throw new ApiError(400, "Failed to Update Product Quantity");
  }

  res
    .status(200)
    .json(new ApiResponse(200, {}, "Cart Product Quantity Updated."));
}); //** User **//

// Wishlist
const addToLikeProducts = asyncHandler(async (req, res) => {
  const { productId } = req.body;

  // Check if the product is already liked by the user
  const existingLike = await LikedProduct.findOne(req.user._Id, { productId });

  if (existingLike) {
    throw new ApiError(400, "Product already liked by the user");
  }

  // Create a new liked product entry
  const likeproduct = await LikedProduct.create({
    user: req.user?._id,
    productId,
  });

  if (!likeproduct) {
    throw new ApiError(500, "Someing Went Wrong While Adding In Wishlist");
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, likeproduct, "Product Successfuly Added In Wishlist")
    );
}); //** User **//

const getAllLikeProducts = asyncHandler(async (req, res) => {
  //   Get User Like Products
  const likeProducts = await LikedProduct.find({
    user: req.user?._id,
  }).populate("productId");
  if (!likeProducts.length) {
    throw new ApiError(404, "No Product in Your Wishlist");
  }
  res
    .status(200)
    .json(
      new ApiResponse(200, likeProducts, "All Like Product Find Successfully")
    );
}); //** User **//

const removeLikeProduct = asyncHandler(async (req, res) => {
  const { productId } = req.body;

  const removeproduct = await LikedProduct.deleteOne({
    user: req.user?._id,
    productId,
  });
  if (!removeproduct) {
    throw new ApiError(400, "Something Went Worng When Remove Liked Product");
  }
  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        removeproduct,
        "Product Remove Successfully In Your Wishlist"
      )
    );
}); //** User **//

export {
  getAllProducts,
  addNewProduct,
  updateProduct,
  deleteProduct,
  addToCartProducts,
  getAllCartProducts,
  removeCartProduct,
  updateCartQuantity,
  addToLikeProducts,
  getAllLikeProducts,
  removeLikeProduct,
};
