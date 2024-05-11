import { PrismaClient } from "@prisma/client";
import logError from "../../utils/logError";
import { ServiceResponse } from "../../types/services.types";

const prisma = new PrismaClient();

const getIpo = async (id: string): Promise<ServiceResponse> => {
  try {
    const data = await prisma.ipo.findUniqueOrThrow({
      where: {
        id: id,
      },
    });

    if (!data)
      return {
        success: false,
        errorMsg: "IPO not found!",
      };

    return {
      success: true,
      data,
    };
  } catch (error: any) {
    logError(error);
    return {
      success: false,
      errorMsg:
        error.code === "P2025" ? "Ipo not found!" : "Something went wrong!",
    };
  }
};

export default getIpo;
