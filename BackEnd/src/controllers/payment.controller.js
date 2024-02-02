import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { instance } from "../index.js";
import crypto from "crypto";

const makepayment = asyncHandler(async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  const order = await instance.orders.create(options);

  if (!order) {
    throw new ApiError(400, "Error When Creating Order");
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        order,
        "Payment successful. Thank you for your order!"
      )
    );
});

const paymentverification = asyncHandler(async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      req.body;

    // generate HMAC-SHA256 signature
    const generateSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    // Validate payment verification
    if (generateSignature === razorpay_signature) {
      res
        .status(200)
        .json(
          new ApiResponse(
            200,
            razorpay_payment_id,
            "Payment verification Successfull "
          )
        );
    }
  } catch (error) {
    throw new ApiError(400, "Payment verification failed");
  }
});

const getkey = asyncHandler(async (req, res) => {
  try {
    const apiKey = process.env.RAZORPAY_KEY_ID;

    if (!apiKey) {
      throw new ApiError(403, "Razorpay API key is not configured.");
    }

    res
      .status(200)
      .json(
        new ApiResponse(200, { key: apiKey }, "Key retrieved successfully.")
      );
  } catch (error) {
    throw new ApiError(400, "Error in getkey controller");
  }
});

export { makepayment, paymentverification, getkey };
