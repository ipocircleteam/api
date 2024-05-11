import { PrismaClient } from "@prisma/client";
import logError from "../../utils/logError";
import { ServiceResponse } from "../../types/services.types";

const prisma = new PrismaClient();

const createIpo = async (ipoData: any): Promise<ServiceResponse> => {
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

export default createIpo;
