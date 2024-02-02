import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productImage: {
      type: String, // cloudinery url
      required: true,
    },
    mrp: {
      type: Number,
      required: true,
      default: 100,
    },
    price: {
      type: Number,
      required: true,
      default: 100,
    },
    // brand: {
    //   type: String,
    //   required: true,
    // },
    // category: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Category",
    //   required: true,
    // },
    colors: [
      {
        type: String,
        required: true,
        default: ["Red", "Black", "Green", "Yellow", "Gray"],
        enum: ["Red", "Black", "Green", "Yellow", "Gray"],
      },
    ],
    sizes: [
      {
        type: String,
        required: true,
        default: ["Small", "Medium", "Large"],
        enum: ["Small", "Medium", "Large"],
      },
    ],
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 1,
    },
    category: {
      type: String,
      default: "T-Shirt",
      required: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
