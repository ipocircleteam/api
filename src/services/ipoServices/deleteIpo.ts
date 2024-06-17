import { PrismaClient } from "@prisma/client";
import logError from "../../utils/logError";
import { ServiceResponse } from "../../types/services.types";
const prisma = new PrismaClient();

const deleteIpo = async (id: string): Promise<ServiceResponse> => {
  try {
    // const data = await prisma.$transaction([
    //   prisma.ipo.create({ data: ipoData.ipo }),
    //   prisma.ipo_Details.create({ data: ipoData.details }),
    //   prisma.ipo_reservation.create({ data: ipoData.reservations }),
    //   prisma.ipo_Timeline.create({ data: ipoData.timeline }),
    //   prisma.ipo_Lotsize.create({ data: ipoData.lotsize }),
    //   prisma.ipo_PromoterHolding.create({ data: ipoData.promoterHoldings }),
    //   prisma.ipo_Financials.create({ data: ipoData.financials }),
    //   prisma.ipo_Kpi.create({ data: ipoData.kpi }),
    //   prisma.ipo_Contact.create({ data: ipoData.contact }),
    //   prisma.registrar_Contact.create({ data: ipoData.registrar }),
    // ]);
    await prisma.ipo.delete({ where: { ipo_id: id } });
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

export default deleteIpo;
