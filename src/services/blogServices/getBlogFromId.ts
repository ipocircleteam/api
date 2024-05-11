import { PrismaClient } from "@prisma/client";
import logError from "../../utils/logError";
import { ServiceResponse } from "../../types/services.types";

const prisma = new PrismaClient();

const getBlogFromId = async (blogId: number): Promise<ServiceResponse> => {
  try {
    if (!blogId) throw new Error("Invalid blog id!");

    const data = await prisma.blog.findUnique({
      where: {
        id: blogId,
      },
    });
    if (!data)
      return {
        success: false,
        errorMsg: "Blog not found!",
      };

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

export default getBlogFromId;
