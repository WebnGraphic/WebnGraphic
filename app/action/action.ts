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

import { revalidatePath } from "next/cache";

interface BookingData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  date: string;
  time: string;
  timezone: string;
}

export async function saveBooking(data: BookingData) {
  // Validate the data
  if (
    !data.name ||
    !data.email ||
    !data.phone ||
    !data.date ||
    !data.time ||
    !data.service
  ) {
    throw new Error("Missing required fields");
  }

  try {
    // In a real application, you would save this data to your database
    // For example, using Prisma:
    //
    // await prisma.booking.create({
    //   data: {
    //     name: data.name,
    //     email: data.email,
    //     phone: data.phone,
    //     service: data.service,
    //     message: data.message || "",
    //     bookingDate: new Date(`${data.date}T00:00:00`),
    //     bookingTime: data.time,
    //     timezone: data.timezone,
    //     status: "pending"
    //   }
    // });

    // For this example, we'll just log the data and simulate a delay
    console.log("Booking saved:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Revalidate the bookings page to show the new booking
    revalidatePath("/book-meeting");

    return { success: true };
  } catch (error) {
    console.error("Error saving booking:", error);
    throw new Error("Failed to save booking");
  }
}
