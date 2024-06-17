import { PrismaClient } from "@prisma/client";
import logError from "../../utils/logError";
import { ServiceResponse } from "../../types/services.types";

const prisma = new PrismaClient();

const getActiveIpoGmp = async (): Promise<ServiceResponse> => {
  try {
    // const activeIpos = await prisma.ipo_Dates.findMany({
    //   where: {
    //     closing_date: {
    //       lt: new Date(),
    //     },
    //   },
    //   select: {
    //     ipo_id: true,
    //   },
    // });

    // if (!activeIpos)
    //   return {
    //     success: false,
    //     errorMsg: "Active IPOs not found!",
    //   };

    //@ts-ignore
    // var reqData = []; //TODO Need to fix this

    // activeIpos.forEach(async (ipo) => {
    //   const data = await prisma.ipo_Gmp.findUnique({
    //     where: {
    //       ipo_id: ipo.ipo_id,
    //     },
    //   });
    //   if (!data) throw new Error("Error fetching gmp values!");
    //   reqData.push(data);
    // });

    return {
      success: true,
      // data: reqData,
    };
  } catch (error) {
    logError(error);
    return {
      success: false,
    };
  }
};

export default getActiveIpoGmp;
