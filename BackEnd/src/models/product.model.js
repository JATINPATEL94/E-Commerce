import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productImages: [
      {
        type: String,
        required: true,
      },
    ],
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
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    colors: {
      type: String,
      required: true,
    },
    sizes: {
      type: String,
      required: true,
    },
    stock: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
