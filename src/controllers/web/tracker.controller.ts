import { Request, Response } from "express";
import { ApiError, ApiResponse, asyncHandler } from "../../utils";
import { PrismaClient } from "@prisma/client";
import { ipoTrackerSchema } from "../../zod/ipo.schema";

const prisma = new PrismaClient();

// GET REQUEST
const getTrackerData = asyncHandler(async (req: Request, res: Response) => {
  const { year } = req.query;

  const trackerData = await prisma.ipo_Tracker.findMany({
    where: {
      year: Number(year),
    },
  });
  if (!trackerData) throw new ApiError(404, "data not found!");
  res
    .status(200)
    .json(new ApiResponse(200, trackerData, "data received successfully!"));
});

// GET TRACKER DATA WITH SERIES
const getTrackerWithSeries = asyncHandler(
  async (req: Request, res: Response) => {
    const { year } = req.query;

    const trackerData = await prisma.ipo_Tracker.findMany({
      where: {
        year: Number(year),
      },
      select: {
        ipo: {
          select: {
            id: true,
            series: true,
          },
        },
      },
      orderBy: {
        year: "desc",
      },
    });

    const data = {
      all: trackerData,
      main: trackerData.filter((item) => item.ipo.series === "MAIN"),
      sme: trackerData.filter((item) => item.ipo.series === "SME"),
    };
    res
      .status(200)
      .json(new ApiResponse(200, data, "data saved successfully!"));
  }
);

// PATCH REQUEST
const updateTrackerEntry = asyncHandler(async (req: Request, res: Response) => {
  const trackerData = req.body;
  const { ipoId } = req.query;

  const updateTracker = await prisma.ipo_Tracker.update({
    where: {
      ipo_id: Number(ipoId),
    },
    data: trackerData,
  });

  if (!updateTracker) throw new ApiError(404, "data not found!");
  res.status(200).json(new ApiResponse(200, {}, "data updated successfully!"));
});

export { getTrackerData, getTrackerWithSeries, updateTrackerEntry };
