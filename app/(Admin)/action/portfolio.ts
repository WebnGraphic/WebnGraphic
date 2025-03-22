"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { checkAdmin } from "../helper/check-admin";

// This is a placeholder for your database operations
// In a real application, you would use Prisma to interact with your database
export async function createPortfolio(data: {
  title: string;
  category: string;
  client: string;
  descriptions: string;
  challenge: string;
  solution: string;
  result: string;
  completeDate: Date;
  featured: boolean;
  published: boolean;
  images: { url: string; publicId: string }[];
  technologies: string[];
}) {
  const author = await checkAdmin();

  if (!author || !author.id) {
    return {
      error: {
        _form: ["You must be an admin to create a portfolio."],
      },
      data: null,
    };
  }

  await prisma.portfolio.create({
    data: {
      ...data,
    },
  });

  revalidatePath("admin/portfolio");

  return { success: true };
}

export async function updatePortfolio(
  id: string,
  data: {
    title?: string;
    category?: string;
    client?: string;
    descriptions?: string;
    challenge?: string;
    solution?: string;
    result?: string;
    completeDate?: Date;
    featured?: boolean;
    published?: boolean;
    images?: { url: string; publicId: string }[];
    technologies?: string[];
  }
) {
  const author = await checkAdmin();

  if (!author || !author.id) {
    return {
      error: {
        _form: ["You must be an admin to update a portfolio."],
      },
      data: null,
    };
  }

  await prisma.portfolio.update({
    where: { id: id },
    data: {
      ...data,
    },
  });

  revalidatePath("admin/portfolio");

  return { success: true };
}

export const getAllPortfolios = async (
  search: string,
  page: number,
  pageSize: number
) => {
  type SearchCondition = {
    OR: {
      title?: { contains: string; mode: "insensitive" };
    }[];
  };
  let whereCondition: SearchCondition | undefined;

  if (search) {
    whereCondition = {
      OR: [{ title: { contains: search, mode: "insensitive" } }],
    };
  }
  try {
    const skip = (page - 1) * pageSize;

    // Fetch portfolios and total count in parallel
    const [data, totalItems] = await Promise.all([
      prisma.portfolio.findMany({
        where: whereCondition,
        skip,
        take: pageSize,
      }),

      prisma.portfolio.count({ where: whereCondition }),
    ]);

    const formattedPortfolios = data.map((portfolio) => ({
      ...portfolio,
      images: Array.isArray(portfolio.images)
        ? portfolio.images
        : JSON.parse(portfolio.images as string), // If it's a stringified JSON, parse it
    }));

    return {
      portfolios: formattedPortfolios,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalItems / pageSize),
        totalItems,
      },
    };
  } catch (err) {
    console.error("Failed to fetch portfolios by search:", err);
    return {
      portfolios: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
      },
    };
  }
};

export async function deletePortfolio(
  id: string
): Promise<{ success: boolean; error?: string }> {
  try {
    // Check if the user is an admin
    const author = await checkAdmin();
    if (!author || !author.id) {
      return { success: false, error: "Unauthorized" };
    }

    // Delete the blog post in the database using Prisma
    await prisma.portfolio.delete({
      where: { id },
    });

    revalidatePath("admin/portfolio");

    return { success: true };
  } catch (error) {
    console.error("Failed to delete portfolio:", error);
    return { success: false, error: "Failed to delete portfolio" };
  }
}
