"use server";
import { checkAdmin } from "../helper/check-admin";
import { uploadToCloudinary } from "../helper/upload-to-cloudinary";

interface BlogData {
  title: string;
  content: string;
  category: string;
  imageLink: File;
  isPopular: boolean;
  published: boolean;
}

export async function uploadImage(data: BlogData) {
  try {
    const admin = await checkAdmin();
    console.log(admin);
    const imageFile = data.imageLink;
    const { secure_url, public_id } = await uploadToCloudinary(
      imageFile,
      "blog"
    );
    console.log(secure_url, public_id);
    return {
      success: true,
      message: "Image uploaded successfully",
    };
  } catch (error) {
    console.error("Upload error:", error);
    return {
      success: false,
      message: "Failed to upload image",
    };
  }
}
