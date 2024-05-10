import { ApiError, ApiResponse, asyncHandler } from "../utils";
import { Request, Response } from "express";
import { getIpoData } from "../services";
import { getIpoQueries } from "../types/ipo.types";

const getRequest = asyncHandler(async (req: Request, res: Response) => {
  const { concise, type, count } = req.query as getIpoQueries;

  const ipoData = await getIpoData(concise, type, count);

  if (ipoData === undefined) {
    throw new ApiError(404, "Data not found!");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, ipoData, "Ipo Data Fetched Successfully!"));
});

export default { getRequest };
