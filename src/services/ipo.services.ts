import { PrismaClient } from "@prisma/client";
import logError from "../utils/logError";

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

    if (type) {
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

export { getIpoData };
