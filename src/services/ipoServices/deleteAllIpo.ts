import { PrismaClient } from "@prisma/client";
import logError from "../../utils/logError";
import { ServiceResponse } from "../../types/services.types";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

const deleteAllIpos = async (): Promise<ServiceResponse> => {
  try {
    await prisma.ipo.deleteMany().catch((e) => {
      throw new Error(e);
    });
    return {
      success: true,
    };
  } catch (error) {
    logError(error);
    return {
      success: false,
    };
  }
};

export default deleteAllIpos;
