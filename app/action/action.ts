"use server";
import { prisma } from "@/lib/prisma";
import { unstable_cache } from "next/cache";

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

import { z } from "zod";

// Define the schema using zod
const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(1, "Phone is required"),
  service: z.string().min(1, "Service is required"),
  message: z.string().optional(),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  timezone: z.string().min(1, "Timezone is required"),
});

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
  // Validate the input data
  const parsedData = bookingSchema.safeParse(data);
  if (!parsedData.success) {
    throw new Error(parsedData.error.errors.map((e) => e.message).join(", "));
  }

  try {
    await prisma.meeting.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message || "",
        bookingDate: new Date(`${data.date}T00:00:00`),
        bookingTime: data.time,
        timezone: data.timezone,
        status: "pending",
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error saving booking:", error);
    throw new Error("Failed to save booking");
  }
}

interface StartedData {
  name: string;
  email: string;
  phone: string;
  service?: string | null;
  message?: string | null;
  plan?: string | null;
  budget?: string | null;
}

const StartedSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(1, "Phone is required"),
  service: z.string().optional(),
  message: z.string().optional(),
  plan: z.string().optional(),
  budget: z.string().optional(),
});

export async function saveGetStarted(data: StartedData) {
  // Validate the input data
  const parsedData = StartedSchema.safeParse(data);
  if (!parsedData.success) {
    throw new Error(parsedData.error.errors.map((e) => e.message).join(", "));
  }

  try {
    await prisma.getStarted.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
        plan: data.plan,
        budget: data.budget,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error saving booking:", error);
    throw new Error("Failed to save booking");
  }
}

const ResponseSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(1, "Phone is required"),
  interest: z.string().optional(),
  message: z.string().optional(),
});
interface ResponseData {
  name: string;
  email: string;
  phone: string;
  interest?: string | null;
  message?: string | null;
}

export async function saveResponseFromContact(data: ResponseData) {
  // Validate the input data
  const parsedData = ResponseSchema.safeParse(data);
  if (!parsedData.success) {
    throw new Error(parsedData.error.errors.map((e) => e.message).join(", "));
  }

  try {
    await prisma.response.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        interest: data.interest,
        message: data.message,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error saving response:", error);
    throw new Error("Failed to save response");
  }
}

export const getAllGraphicProjects = async () => {
  try {
    const graphicProject = await prisma.graphicdesign.findMany({
      orderBy: { createdAt: "desc" },
    });

    return graphicProject;
  } catch (err) {
    console.error("Failed to fetch projects", err);
    return null;
  }
};
export const getAllWebDevProjects = async () => {
  try {
    const webDevProjects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });

    // Cast the JSON data to the expected types
    const typedProjects = webDevProjects.map((project) => ({
      ...project,
      testimonial: project.testimonial as { quote: string; author: string },
      images: project.images as { url: string; publicId: string }[],
    }));

    return typedProjects;
  } catch (err) {
    console.error("Failed to fetch projects by search:", err);
    return null;
  }
};

export const getAllBlogs = async (
  search: string = "",
  page: number = 1,
  pageSize: number = 3
) => {
  type SearchCondition = {
    OR?: {
      title?: { contains: string; mode: "insensitive" };
      content?: { contains: string; mode: "insensitive" };
    }[];
    published: boolean;
  };

  const whereCondition: SearchCondition = { published: true };

  if (search) {
    whereCondition.OR = [
      { title: { contains: search, mode: "insensitive" } },
      { content: { contains: search, mode: "insensitive" } },
    ];
  }
  try {
    const skip = (page - 1) * pageSize;

    const [blogs, totalItems] = await Promise.all([
      prisma.blog.findMany({
        where: whereCondition,
        orderBy: { createdAt: "desc" },
        skip,
        take: pageSize,
        include: {
          author: {
            select: {
              name: true,
            },
          },
        },
      }),

      prisma.blog.count({ where: whereCondition }),
    ]);

    return {
      blogs,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalItems / pageSize),
        totalItems,
      },
    };
  } catch (err) {
    console.error("Failed to fetch users by search:", err);
    return {
      blogs: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
      },
    };
  }
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(6, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().optional(),
});

type FormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Validate form data
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  // Return early if validation fails
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please check your inputs and try again.",
    };
  }

  try {
    // Get the validated data
    const { name, email, phone, message } = validatedFields.data;

    await prisma.response.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    });

    // Return success state
    return {
      success: true,
      message: "Form submitted successfully!",
    };
  } catch (error) {
    // Handle any errors
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}

const _getAllBlogs = async () => {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return {
      blogs,
    };
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
    return {
      blogs: [],
    };
  }
};

export const getAllBlog = unstable_cache(_getAllBlogs, ["get-all-blog"], {
  tags: ["blog:all"],
});

const _getBlogForCommon = async () => {
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        isPopular: true,
      },
      orderBy: { createdAt: "desc" },
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return {
      blogs,
    };
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
    return {
      blogs: [],
    };
  }
};

// Wrap with unstable_cache and add a tag (no revalidate option needed)
export const getBlogForCommon = unstable_cache(
  _getBlogForCommon,
  ["get-blog-for-common"],
  {
    tags: ["blog:common"],
  }
);

export const getBlogById = async (id: string) => {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return { blog };
  } catch (err) {
    console.error(`Failed to fetch blog with id ${id}:`, err);
    return { blog: null };
  }
};

const _getAllTestimonial = async () => {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });
    return {
      testimonials,
    };
  } catch (err) {
    console.error("Failed to fetch testimonials:", err);
    return {
      blogs: [],
    };
  }
};
export const getAllTestimonials = unstable_cache(
  _getAllTestimonial,
  ["get-all-testimonial"],
  {
    tags: ["testimonial:all"],
  }
);
