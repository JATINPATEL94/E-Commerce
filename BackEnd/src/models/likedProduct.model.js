import mongoose, { Schema } from "mongoose";

const likedProductSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  { timestamps: true }
);

export const LikedProduct = mongoose.model("LikedProduct", likedProductSchema);
