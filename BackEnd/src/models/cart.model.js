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
        sizes: {
          type: String,
          required: true,
          enum: ["Small", "Medium", "Large"],
        },
        colors: {
          type: String,
          required: true,
          enum: ["Red", "Black", "Green", "Yellow", "Gray"],
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
    subTotalMRP: {
      type: Number,
      default: 0,
    },
    subTotal: {
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
    cart.subTotalMRP = 0;
    cart.subTotal = 0;

    for (const item of cart.items) {
      const product = await Product.findById(item.productId);

      if (product) {
        item.totalMRP = product.mrp * item.quantity;
        item.total = product.price * item.quantity;

        cart.subTotalMRP += item.totalMRP;
        cart.subTotal += item.total;
      }
    }

    next();
  } catch (error) {
    next(error);
  }
});

export const Cart = mongoose.model("Cart", cartSchema);
