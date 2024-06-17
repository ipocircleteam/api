import { PrismaClient } from "@prisma/client";
import logError from "../../utils/logError";
import { ServiceResponse } from "../../types/services.types";
import { IPO_Series } from "../../types/ipo.types";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

const getIpoStats = async (type: string): Promise<ServiceResponse> => {
  try {
    let totalIpos = 0;
    let positiveListings = 0;
    let negativeListings = 0;
    let aboveGmp = 0;
    let belowGmp = 0;

    const queryOptions = {
      where: {
        series: type === "main" ? IPO_Series.main : IPO_Series.sme,
      },
      // include: {
      //   ipoDates: true,
      //   ipoTracker: true,
      //   ipoGmp: true,
      // },
    };

    const ipos = await prisma.ipo.findMany(queryOptions);
    // if (!ipos)
    //   return {
    //     success: false,
    //     errorMsg: "IPOs not found!",
    //   };

    // for (const ipo of ipos) {
    //   totalIpos++;

    //   if (ipo.ipoTracker?.listing_price && ipo.ipoDates?.listing_date) {
    //     const { listing_price, issue_price } = ipo.ipoTracker;
    //     const listingDate = new Date(ipo.ipoDates.listing_date);

    //     if (
    //       listing_price > issue_price &&
    //       ipo.ipoGmp?.instant &&
    //       ipo.ipoGmp.absolute_value?.length &&
    //       listingDate >=
    //         new Date(ipo.ipoGmp.instant[ipo.ipoGmp.instant.length - 1])
    //     ) {
    //       positiveListings++;
    //     } else if (
    //       listing_price < issue_price &&
    //       ipo.ipoGmp?.instant &&
    //       ipo.ipoGmp.absolute_value?.length &&
    //       listingDate >=
    //         new Date(ipo.ipoGmp.instant[ipo.ipoGmp.instant.length - 1])
    //     ) {
    //       negativeListings++;
    //     }
    //   }

    //   if (ipo.ipoGmp?.absolute_value?.length) {
    //     const latestGMP =
    //       ipo.ipoGmp.absolute_value[ipo.ipoGmp.absolute_value.length - 1];
    //     if (
    //       ipo.ipoTracker?.listing_price &&
    //       ipo.ipoGmp.instant &&
    //       ipo.ipoTracker.listing_price > latestGMP
    //     ) {
    //       aboveGmp++;
    //     } else if (
    //       ipo.ipoTracker?.listing_price &&
    //       ipo.ipoGmp.instant &&
    //       ipo.ipoTracker.listing_price < latestGMP
    //     ) {
    //       belowGmp++;
    //     }
    //   }
    // }

    return {
      success: true,
      // data: {
      //   totalIpos,
      //   positiveListings,
      //   negativeListings,
      //   aboveGmp,
      //   belowGmp,
      // },
    };
  } catch (error) {
    logError(error);
    return {
      success: false,
    };
  }
};

export default getIpoStats;
