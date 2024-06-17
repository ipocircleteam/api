import { PrismaClient } from "@prisma/client";
import logError from "../../utils/logError";
import { ServiceResponse } from "../../types/services.types";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

const getSuggestedIpos = async (): Promise<ServiceResponse> => {
  try {
    const data = await prisma.suggested_Ipo.findMany();
    if (!data)
      return {
        success: false,
        errorMsg: "Suggested IPOs not found!",
      };

    return {
      success: true,
      data,
    };
  } catch (error) {
    logError(error);
    return {
      success: false,
    };
  }
};

export default getSuggestedIpos;
