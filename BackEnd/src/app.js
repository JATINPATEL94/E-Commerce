import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// express configuration
app.use(express.json({ limit: "15kb" }));

app.use(express.urlencoded({ extended: true, limit: "15kb" }));

app.use(express.static("public"));

app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";

//routes declaration  (prefix routes)
app.use("/api/v1/users", userRouter);
app.use("/api/v1/product", productRouter);

export { app };
