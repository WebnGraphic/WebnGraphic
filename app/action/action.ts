"use server";
import { prisma } from "@/lib/prisma";

export async function createResponse(formData: FormData) {
  try {
    // Validate form data
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const interest = formData.get("interest") as string;

    // Basic validation
    if (!name || !email || !phone || !interest) {
      return {
        success: false,
        message: "Please fill in all required fields",
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address",
      };
    }

    // Create the response in the database
    await prisma.response.create({
      data: {
        name,
        email,
        phone,
        message,
        interest,
      },
    });

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to submit form",
    };
  }
}
/* export const deletePost = async (formData: FormData): Promise<void> => {
  const id = formData.get("id") as string; // Ensure `id` is a string

  if (!id) {
    console.error("Invalid post ID");
    return;
  }

  try {
    await prisma.post.delete({
      where: { id },
    });
    console.log("Post deleted successfully!");
  } catch (err) {
    console.error("Failed to delete post:", err);
  }
};
export const deletePostR = async (formData: FormData): Promise<void> => {
  const id = formData.get("id") as string; // Ensure `id` is a string

  if (!id) {
    console.error("Invalid post ID");
    return;
  }

  try {
    await prisma.post.delete({
      where: { id },
    });
    console.log("Post deleted successfully!");
  } catch (err) {
    console.error("Failed to delete post:", err);
  }
  revalidatePath("/poststatic-r");
  revalidatePath("/postdynamic-r");
}; */
