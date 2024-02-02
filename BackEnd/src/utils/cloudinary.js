import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Upload File In cloudinary
const uploadOnCloudinary = async (localFilePath, user = false) => {
  try {
    if (!localFilePath) {
      return null;
    }
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder: user ? "StyleBlend/Users" : "StyleBlend/Products",
    });
    console.log("File Is Uploaded Successfull", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove local saved temp. file
  }
};

export { uploadOnCloudinary };
