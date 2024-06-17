import { PrismaClient } from "@prisma/client";
import logError from "../../utils/logError";
import { ServiceResponse } from "../../types/services.types";

const prisma = new PrismaClient();

const getTrackerData = async (year: number): Promise<ServiceResponse> => {
  try {
    // const trackerData = await prisma.ipo_Tracker.findMany({
    //   where: {
    //     year: Number(year),
    //   },
    // });

    // if (!trackerData)
    //   return {
    //     success: false,
    //     errorMsg: "Tracker data not found!",
    //   };

    return {
      success: true,
      // data: trackerData,
    };
  } catch (error) {
    logError(error);
    return {
      success: false,
    };
  }
};

export default getTrackerData;
