import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: "Content-type",
    credentials: true,
  })
);

// Body parsers
app.use(express.json({ limit: "15kb" }));
app.use(express.urlencoded({ extended: true, limit: "15kb" }));

// Static files
app.use(express.static("public"));

// Cookie parser
app.use(cookieParser());

// Import routes
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import paymentRouter from "./routes/payment.routes.js";
import orderRouter from "./routes/order.routes.js";

// Route declarations (prefix routes)
app.use("/api/v1/users", userRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/payment", paymentRouter);
app.use("/api/v1/order", orderRouter);

export default app;
