import { PrismaClient } from "@prisma/client";
import logError from "../utils/logError";
import { IPO_Series, IpoStatsType } from "../types/ipo.types";

const prisma = new PrismaClient();

type GetQueryTYpe = {
  where?: {};
  take?: number;
  select?: {};
};

const getIpoData = async (concise?: boolean, type?: string, count?: number) => {
  try {
    const queryOptions: GetQueryTYpe = {
      where: {},
      take: count ? count : undefined,
      select: {},
    };

    if (type && (type === "sme" || type === "main")) {
      queryOptions.where = {
        series: type,
      };
    }

    if (concise) {
      queryOptions.select = {
        id: true,
        name: true,
        ipoDates: {
          select: {
            opening_date: true,
            closing_date: true,
          },
        },
      };
    } else {
      delete queryOptions.select;
    }

    const data = await prisma.ipo.findMany(queryOptions);
    return data;
  } catch (error) {
    logError(error);
    return undefined;
  }
};

const getIpoStats = async (type: string): Promise<IpoStatsType | undefined> => {
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
      include: {
        ipoDates: true,
        ipoTracker: true,
        ipoGmp: true,
      },
    };

    const ipos = await prisma.ipo.findMany(queryOptions);

    for (const ipo of ipos) {
      totalIpos++;

      if (ipo.ipoTracker?.listing_price && ipo.ipoDates?.listing_date) {
        const { listing_price, issue_price } = ipo.ipoTracker;
        const listingDate = new Date(ipo.ipoDates.listing_date);

        if (
          listing_price > issue_price &&
          ipo.ipoGmp?.instant &&
          ipo.ipoGmp.absolute_value?.length &&
          listingDate >=
            new Date(ipo.ipoGmp.instant[ipo.ipoGmp.instant.length - 1])
        ) {
          positiveListings++;
        } else if (
          listing_price < issue_price &&
          ipo.ipoGmp?.instant &&
          ipo.ipoGmp.absolute_value?.length &&
          listingDate >=
            new Date(ipo.ipoGmp.instant[ipo.ipoGmp.instant.length - 1])
        ) {
          negativeListings++;
        }
      }

      if (ipo.ipoGmp?.absolute_value?.length) {
        const latestGMP =
          ipo.ipoGmp.absolute_value[ipo.ipoGmp.absolute_value.length - 1];
        if (
          ipo.ipoTracker?.listing_price &&
          ipo.ipoGmp.instant &&
          ipo.ipoTracker.listing_price > latestGMP
        ) {
          aboveGmp++;
        } else if (
          ipo.ipoTracker?.listing_price &&
          ipo.ipoGmp.instant &&
          ipo.ipoTracker.listing_price < latestGMP
        ) {
          belowGmp++;
        }
      }
    }

    return {
      totalIpos,
      positiveListings,
      negativeListings,
      aboveGmp,
      belowGmp,
    };
  } catch (error) {
    logError(error);
    return undefined;
  }
};

const getIpo = async (id: string) => {
  try {
    const data = await prisma.ipo.findUniqueOrThrow({
      where: {
        id: id,
      },
    });

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

const createIpo = async (ipoData: any) => {
  try {
    const data = {};
    // const result = await prisma.ipo.create({ data: ipoData.ipo });
    // const ipoId = result.id;

    // await prisma.$transaction([
    //   prisma.ipo_Anchor.create({
    //     data: { ipo_id: ipoId, ...ipoData.anchor },
    //   }),
    //   prisma.ipo_ContactDetails.create({
    //     data: { ipo_id: ipoId, ...ipoData.contact },
    //   }),
    //   prisma.ipo_Dates.create({
    //     data: { ipo_id: ipoId, ...ipoData.dates },
    //   }),
    //   prisma.ipo_FinProgress.create({
    //     data: { ipo_id: ipoId },
    //   }),
    //   prisma.ipo_Finances.create({
    //     data: { ipo_id: ipoId, ...ipoData.finance },
    //   }),
    //   prisma.ipo_Gmp.create({ data: { ipo_id: ipoId } }),
    //   prisma.ipo_Lots.create({ data: { ipo_id: ipoId, ...ipoData.lots } }),
    //   prisma.ipo_OtherDetails.create({
    //     data: { ipo_id: ipoId, ...ipoData.otherDetails },
    //   }),
    //   prisma.ipo_Prices.create({
    //     data: { ipo_id: ipoId, ...ipoData.prices },
    //   }),
    //   prisma.ipo_Reservations.create({
    //     data: { ipo_id: ipoId, ...ipoData.reservations },
    //   }),
    //   prisma.ipo_Review.create({
    //     data: { ipo_id: ipoId, ...ipoData.review },
    //   }),
    //   prisma.ipo_Shares.create({
    //     data: { ipo_id: ipoId, ...ipoData.shares },
    //   }),
    //   prisma.ipo_Subscriptions.create({
    //     data: { ipo_id: ipoId, ...ipoData.subscription },
    //   }),
    //   prisma.ipo_Tracker.create({
    //     data: { ipo_id: ipoId, ...ipoData.tracker },
    //   }),
    // ]);
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

const getTrackerData = async (year: number) => {
  try {
    const trackerData = await prisma.ipo_Tracker.findMany({
      where: {
        year: Number(year),
      },
    });

    if (!trackerData) {
      throw new Error("Data not found!");
    }

    return {
      success: true,
      data: trackerData,
    };
  } catch (error) {
    logError(error);
    return {
      success: false,
    };
  }
};

const getSuggestedIpos = async () => {
  try {
    const data = await prisma.suggested_Ipo.findMany();
    if (!data) throw new Error("Data not found!");

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

const getActiveIpoGmp = async () => {
  try {
    const activeIpos = await prisma.ipo_Dates.findMany({
      where: {
        closing_date: {
          lt: new Date(),
        },
      },
      select: {
        ipo_id: true,
      },
    });

    if (!activeIpos) throw new Error("Error fetching active IPOs");

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

export default {
  getIpoData,
  getIpoStats,
  createIpo,
  getTrackerData,
  getIpo,
  getSuggestedIpos,
  getActiveIpoGmp,
};
