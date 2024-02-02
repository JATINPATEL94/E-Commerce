import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Order } from "../models/order.model.js";
import { Cart } from "../models/cart.model.js";

const addNewOrder = asyncHandler(async (req, res) => {
  try {
    const { paymentMethod, transactionId } = req.body;

    // Fetch the user's cart data
    const userCart = await Cart.findOne({ user: req.user?._id });
    if (!userCart) {
      throw new ApiError(400, "User Cart Not Found");
    }

    // Check if the user has existing orders
    const existingOrders = await Order.findOne({ user: req.user?._id });

    // If the user has existing orders, push the new order details
    if (existingOrders) {
      existingOrders.order.push({
        items: userCart.items,
        subTotalMRP: userCart.subTotalMRP,
        subTotal: userCart.subTotal,
        status: "Pending",
        payment: {
          method: paymentMethod,
          transactionId: transactionId,
          status: "Success",
        },
      });

      const updatedOrder = await existingOrders.save();

      if (!updatedOrder) {
        throw new ApiError(500, "Error updating existing order");
      }

      // Remove the user's cart after updating the order
      const deletedCart = await userCart.deleteOne();

      if (!deletedCart || deletedCart.deletedCount === 0) {
        throw new ApiError(500, "Error removing cart products");
      }

      res
        .status(200)
        .json(new ApiResponse(200, updatedOrder, "Order updated successfully"));
    } else {
      // If the user has no existing orders, create a new order
      const orderData = {
        user: userCart.user,
        order: [
          {
            items: userCart.items,
            subTotalMRP: userCart.subTotalMRP,
            subTotal: userCart.subTotal,
            status: "Pending",
            payment: {
              method: paymentMethod,
              transactionId: transactionId,
              status: "Pending",
            },
          },
        ],
      };
      const newOrder = new Order(orderData);
      const savedOrder = await newOrder.save();
      if (!savedOrder) {
        throw new ApiError(500, "Error saving new order");
      }

      // Remove the user's cart after creating the new order
      const deletedCart = await userCart.deleteOne();

      if (!deletedCart || deletedCart.deletedCount === 0) {
        throw new ApiError(400, "Error Removing Cart Products");
      }

      res
        .status(200)
        .json(new ApiResponse(200, savedOrder, "Order created successfully"));
    }
  } catch (error) {
    throw new ApiError(400, error.message);
  }
});

const getAllOrder = asyncHandler(async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user?._id });

    if (!orders || orders.length === 0) {
      throw new ApiError(404, "No Orders Found");
    }

    res
      .status(200)
      .json(new ApiResponse(200, orders, "All Orders Found Successfully"));
  } catch (error) {
    throw new ApiError(
      400,
      "Error When Fetching All Orders From Server: " + error
    );
  }
});

export { addNewOrder, getAllOrder };
