"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteResponse = async (id: string): Promise<void> => {
  if (!id) {
    console.error("Invalid response ID");
    return;
  }
  try {
    await prisma.response.delete({
      where: { id },
    });
  } catch (err) {
    console.error("Failed to delete Response:", err);
  }
  revalidatePath("/admin/response");
};

export const getAllResponses = async (
  search: string,
  page: number,
  pageSize: number
) => {
  type SearchCondition = {
    OR: {
      name?: { contains: string; mode: "insensitive" };
      email?: { contains: string; mode: "insensitive" };
      phone?: { contains: string; mode: "insensitive" };
      message?: { contains: string; mode: "insensitive" };
      interest?: { contains: string; mode: "insensitive" };
    }[];
  };

  let whereCondition: SearchCondition | undefined;

  if (search) {
    whereCondition = {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { phone: { contains: search, mode: "insensitive" } },
        { message: { contains: search, mode: "insensitive" } },
        { interest: { contains: search, mode: "insensitive" } },
      ],
    };
  }
  try {
    const skip = (page - 1) * pageSize;

    const [responses, totalItems] = await Promise.all([
      prisma.response.findMany({
        where: whereCondition,
        skip,
        take: pageSize,
      }),

      prisma.response.count({ where: whereCondition }),
    ]);

    return {
      responses,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalItems / pageSize),
        totalItems,
      },
    };
  } catch (err) {
    console.error("Failed to fetch users by search:", err);
    return {
      responses: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
      },
    };
  }
};
