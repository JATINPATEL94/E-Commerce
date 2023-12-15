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

app.use(express.urlencoded);

app.use(express.static("public"));

app.use(cookieParser());

export { app };
