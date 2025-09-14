import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// ✅ Upload to Cloudinary (image or PDF inline)
export const uploadToCloudinary = (fileBuffer, folder, mimetype) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",   // ✅ force "image" for everything
        access_mode: "public",
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);  // ✅ secure URL of uploaded file
      }
    );

    streamifier.createReadStream(fileBuffer).pipe(uploadStream);
  });
};
