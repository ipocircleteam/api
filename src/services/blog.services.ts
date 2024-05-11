import { PrismaClient } from "@prisma/client";
import { ServiceResponse } from "../types/services.types";
import logError from "../utils/logError";

const prisma = new PrismaClient();

const getAllBlogs = async (concise: boolean): Promise<ServiceResponse> => {
  try {
    const data = concise
      ? await prisma.blog.findMany({
          select: {
            id: true,
            title: true,
            slug: true,
            description: true,
            imageUrl: true,
          },
        })
      : await prisma.blog.findMany();
    if (!data) throw new Error("Blogs not found!");

    return {
      success: true,
      data,
    };
  } catch (error: any) {
    logError(error);
    return {
      success: false,
      errorMsg: error.message || "Something went wrong!",
    };
  }
};

export default {
  getAllBlogs,
};
