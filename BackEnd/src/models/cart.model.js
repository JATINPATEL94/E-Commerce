import mongoose, { Schema } from "mongoose";
import { Product } from "./product.model.js";

const cartSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        totalMRP: {
          type: Number,
          default: 0,
        },
        total: {
          type: Number,
          default: 0,
        },
      },
    ],
    totalMRP: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Calculate totalMRP and total before saving the cart
cartSchema.pre("save", async function (next) {
  try {
    const cart = this;

    // Calculate totalMRP and total based on items in the cart
    cart.totalMRP = 0;
    cart.total = 0;

    for (const item of cart.items) {
      const product = await Product.findById(item.productId);

      if (product) {
        item.totalMRP = product.mrp * item.quantity;
        item.total = product.price * item.quantity;

        cart.totalMRP += item.totalMRP;
        cart.total += item.total;
      }
    }

    next();
  } catch (error) {
    next(error);
  }
});

export const Cart = mongoose.model("Cart", cartSchema);
