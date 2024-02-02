import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    order: [
      {
        items: [
          {
            productId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Product",
              required: true,
            },
            quantity: {
              type: Number,
              required: true,
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
              required: true,
            },
            total: {
              type: Number,
              required: true,
            },
          },
        ],
        subTotalMRP: {
          type: Number,
          required: true,
        },
        subTotal: {
          type: Number,
          required: true,
        },
        orderdDate: {
          type: Date,
          default: Date.now,
          required: true,
        },
        status: {
          type: String,
          default: "Pending",
          enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
        },
        payment: {
          method: {
            type: String,
            required: true,
            enum: ["Credit Card", "Debit Card", "PayPal", "Other"],
          },
          transactionId: {
            type: String,
            unique: true,
            required: true,
          },
          status: {
            type: String,
            default: "Pending",
            enum: ["Pending", "Success", "Failed"],
          },
        },
      },
    ],
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
