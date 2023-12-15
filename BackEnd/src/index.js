import "dotenv/config";
import connectDB from "./db/db.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000);
    console.log(`⚙️  Server is Running at Port: ${process.env.PORT}`);
  })
  .catch((error) => {
    console.log("MONGODB CONNECTION FAILED !!!", error);
  });
