import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { LikedProduct } from "../models/likedProduct.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Product } from "../models/product.model.js";
import { Cart } from "../models/cart.model.js";

// Product
const getAllProducts = asyncHandler(async (req, res) => {
  const allProducts = await Product.find();
  if (!allProducts.length) {
    throw new ApiError(404, "No Product Aveleble In Site");
  }

  res
    .status(200)
    .json(new ApiResponse(200, allProducts, "All Product Get Successfully"));
}); //** Non-Auth **//

const serchProducts = asyncHandler(async (req, res) => {
  const { query } = req.query;

  if (!query) {
    throw new ApiError(400, "Please Enter Product Name or Details");
  }

  const product = await Product.find({
    $or: [
      { name: { $regex: query, $options: "i" } },
      { description: { $regex: query, $options: "i" } },
    ],
  });

  if (product.length === 0) {
    throw new ApiError(404, "Product Not Found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, product, "Product Found SuccessFully"));
});

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
    category,
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
      colors[{}],
      sizes[{}],
      stock,
      rating,
      category,
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
    category,
  });

  if (!product) {
    throw new ApiError(400, "Somthing Went worng When Adding Product");
  }

  res
    .status(200)
    .json(new ApiResponse(200, product, "Product Adding successfully"));
}); //** Admin **//

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
    category,
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
      colors[{}],
      sizes[{}],
      stock,
      rating,
      category,
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
      category,
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

// Cart
const addToCartProducts = asyncHandler(async (req, res) => {
  // get data from request.body
  const { productId, quantity = 1, colors, sizes } = req.body;

  // Validation
  if ((!productId || quantity <= 0, !colors, !sizes)) {
    throw new ApiError(400, "Colors and sizes are required");
  }

  //Chek Product Quantity in Stock Or Not
  const productStock = await Product.findOne({
    _id: productId,
  });

  if (productStock.stock === 0) {
    throw new ApiError(400, "Out Of Stok");
  }
  if (productStock.stock < quantity) {
    throw new ApiError(
      400,
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

  // Checking if the product is already added to the cart
  const existingItemIndex = userCart.items.findIndex(
    (item) =>
      item.productId.toString() === productId.toString() &&
      item.colors === colors &&
      item.sizes === sizes
  );

  // If productId is not in cart, add the product to the cart
  if (existingItemIndex === -1) {
    userCart.items.push({
      productId,
      quantity,
      colors,
      sizes,
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
  const { productId, colors, sizes, quantity } = req.body;

  // Check if the product exists in the user's cart
  const userCart = await Cart.findOne({
    user: req.user?._id,
    "items.productId": productId,
    "items.colors": colors,
    "items.sizes": sizes,
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
          colors: colors,
          sizes: sizes,
        },
      },
    }
  );

  if (!removeProduct || removeProduct.modifiedCount === 0) {
    throw new ApiError(400, "Failed to Remove Product from Cart");
  }

  //Remove Cart Product Quantity Adding into Stock
  const productStock = await Product.findOne({
    _id: productId,
  });

  if (productStock.stock) {
    await Product.updateOne(
      { _id: productId },
      { $set: { stock: productStock.stock + quantity } }
    );
  }

  // Recalculate Total Values in Cart
  const updatedCart = await Cart.findOne({
    user: req.user?._id,
  });

  if (updatedCart) {
    updatedCart.subTotalMRP = 0;
    updatedCart.subTotal = 0;

    for (const item of updatedCart.items) {
      updatedCart.subTotalMRP += item.totalMRP;
      updatedCart.subTotal += item.total;
    }
    await updatedCart.save();
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        updatedCart,
        "Product Remove Successfully In Your Cart"
      )
    );
}); //** User **//

const updateCartQuantity = asyncHandler(async (req, res) => {
  const { productId, quantity, newQuantity, colors, sizes } = req.body;

  // validiation
  if (!productId || !quantity || !newQuantity) {
    throw new ApiError(400, "Minimum 1 Quantity Are Required");
  }

  //Chek Product Quantity in Stock Or Not
  const productStock = await Product.findOne({
    _id: productId,
  });

  if (productStock.stock > (newQuantity <= 0 ? 1 : newQuantity) - quantity) {
    await Product.updateOne(
      { _id: productId },
      { $set: { stock: productStock.stock + quantity - newQuantity } }
    );
  } else {
    throw new ApiError(
      200,
      "Requested quantity exceeds available stock for the product"
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

  // Update Product Quantity in Cart

  const updateQuantity = await Cart.updateOne(
    {
      user: req.user?._id,
      "items.productId": productId,
      "items.colors": colors,
      "items.sizes": sizes,
    },
    {
      $set: {
        "items.$.quantity": newQuantity,
      },
    }
  );

  if (!updateQuantity || updateQuantity.nModified === 0) {
    throw new ApiError(400, "Failed to Update Product Quantity");
  }

  // Recalculate Total Values in Cart
  const updatedCart = await Cart.findOne({
    user: req.user?._id,
  });

  if (updatedCart) {
    updatedCart.subTotalMRP = 0;
    updatedCart.subTotal = 0;

    for (const item of updatedCart.items) {
      updatedCart.subTotalMRP += item.totalMRP;
      updatedCart.subTotal += item.total;
    }
    await updatedCart.save();
  }

  res
    .status(200)
    .json(new ApiResponse(200, updatedCart, "Cart Product Quantity Updated."));
}); //** User **//

// Wishlist
const addToLikeProducts = asyncHandler(async (req, res) => {
  const { productId, colors, sizes } = req.body;

  // Check if the product is already liked by the user
  const existingLike = await LikedProduct.findOne({
    user: req.user?._id,
    productId,
  });

  if (existingLike !== null) {
    // Remove the liked product entry
    const removeproduct = await LikedProduct.deleteOne({
      user: req.user?._id,
      productId,
    });

    if (removeproduct.deletedCount !== 1) {
      throw new ApiError(
        400,
        "Something Went Wrong When Removing Liked Product"
      );
    }

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          existingLike,
          "Product Remove Successfully In Your Wishlist"
        )
      );
  }

  // Create a new liked product entry
  const newLikedProduct = await LikedProduct.create({
    user: req.user?._id,
    productId,
    colors,
    sizes,
  });

  if (!newLikedProduct) {
    throw new ApiError(500, "Someing Went Wrong While Adding In Wishlist");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        newLikedProduct,
        "Product Successfuly Added In Wishlist"
      )
    );
}); //** User **//

const getAllLikeProducts = asyncHandler(async (req, res) => {
  const likeProducts = await LikedProduct.find({
    user: req.user?._id,
  }).populate("productId");

  res
    .status(200)
    .json(
      new ApiResponse(200, likeProducts, "All Like Product Find Successfully")
    );
}); //** User **//

export {
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
};
