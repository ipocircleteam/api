import { ApiError, ApiResponse, asyncHandler } from "../utils";
import { Request, Response } from "express";
import { getIpoData } from "../services";
import { getIpoQueries } from "../types/ipo.types";

const getRequest = asyncHandler(async (req: Request, res: Response) => {
  const { concise, type, count, page } = req.query as getIpoQueries;

  var ipoData = await getIpoData(Boolean(concise), type, Number(count));

  if (ipoData === undefined) {
    throw new ApiError(404, "Data not found!");
  }

  if (page !== undefined) {
    //pagination
    const pageNo = Number(page);
    ipoData = ipoData.slice(20 * (pageNo - 1), 20 * pageNo);
  }

  return res
    .status(201)
    .json(new ApiResponse(201, ipoData, "Ipo Data Fetched Successfully!"));
});

export default { getRequest };
