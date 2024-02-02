import "dotenv/config";
import connectDB from "./db/db.js";
import app from "./app.js";
import Razorpay from "razorpay";

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000);
    console.log(`⚙️  Server is Running at Port: ${process.env.PORT || 8000}`);
  })
  .catch((error) => {
    console.log("MONGODB CONNECTION FAILED !!!", error);
  });
