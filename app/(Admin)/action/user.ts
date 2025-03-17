"use server";
import { prisma } from "@/lib/prisma";

export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany(); // Fetch all users
    return users;
  } catch (err) {
    console.error("Failed to fetch users:", err);
    return [];
  }
};

export const getAllUsersBySearch = async (
  search: string,
  page: number,
  pageSize: number
) => {
  type SearchCondition = {
    OR: {
      name?: { contains: string; mode: "insensitive" };
      email?: { contains: string; mode: "insensitive" };
    }[];
  };

  let whereCondition: SearchCondition | undefined;

  if (search) {
    whereCondition = {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ],
    };
  }
  try {
    const skip = (page - 1) * pageSize;

    const [users, totalItems] = await Promise.all([
      prisma.user.findMany({
        where: whereCondition,
        skip,
        take: pageSize,
      }),

      prisma.user.count({ where: whereCondition }),
    ]);

    return {
      users,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalItems / pageSize),
        totalItems,
      },
    };
  } catch (err) {
    console.error("Failed to fetch users by search:", err);
    return {
      users: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
      },
    };
  }
};
