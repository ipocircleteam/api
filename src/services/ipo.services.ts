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

export { getIpoData, getIpoStats, getIpo };
