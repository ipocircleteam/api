import { ApiError, ApiResponse, asyncHandler } from "../utils";
import { Request, Response } from "express";
import { ipoService } from "../services";
import { getIpoQueries } from "../types/ipo.types";

const getRequest = asyncHandler(async (req: Request, res: Response) => {
  const { concise, type, count, page } = req.query as getIpoQueries;

  var ipoData = await ipoService.getIpoData(
    Boolean(concise),
    type,
    Number(count)
  );

  if (!ipoData) {
    throw new ApiError(404, "Data not found!");
  }

  if (page) {
    //pagination
    const pageNo = Number(page);
    ipoData = ipoData.slice(20 * (pageNo - 1), 20 * pageNo);
  }

  return res
    .status(201)
    .json(new ApiResponse(201, ipoData, "Ipo Data Fetched Successfully!"));
});

const getStatsRequest = asyncHandler(async (req: Request, res: Response) => {
  const { type } = req.query as { type?: string };
  var reqData;

  if (type && (type === "main" || type === "sme")) {
    reqData = await ipoService.getIpoStats(type);
  } else if (!type) {
    const smeIpoStats = await ipoService.getIpoStats("sme");
    const mainIpoStats = await ipoService.getIpoStats("main");
    if (!mainIpoStats || !smeIpoStats) {
      throw new ApiError(404, "Data not found!");
    }
    reqData = {
      main: mainIpoStats,
      sme: smeIpoStats,
    };
  } else {
    throw new ApiError(400, "Invalid query parameters!");
  }

  if (!reqData) {
    throw new ApiError(404, "Data not found!");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, reqData, "Ipo Stats Fetched Successfully!"));
});

const getIpoRequest = asyncHandler(async (req: Request, res: Response) => {
  const ipoId = req.params.id;
  const ipo = await ipoService.getIpo(ipoId);
  if (!ipo.success) {
    throw new ApiError(404, ipo.errorMsg);
  }

  return res
    .status(201)
    .json(new ApiResponse(201, ipo.data, "Ipo fetched successfully!"));
});

const postIpoRequest = asyncHandler(async (req: Request, res: Response) => {
  const ipo = req.body;
  const resData = await ipoService.createIpo(ipo);
  if (!resData.success) {
    throw new ApiError(422, "Ipo not added!");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, resData.data, "Ipo added successfully!"));
});

const patchIpoRequest = asyncHandler(async (req: Request, res: Response) => {
  const ipo = req.body;
  const resData = await ipoService.createIpo(ipo);
  if (!resData.success) {
    throw new ApiError(422, "Ipo not added!");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, resData.data, "Ipo added successfully!"));
});

const deleteIpoRequest = asyncHandler(async (req: Request, res: Response) => {
  const ipo = req.body;
  const resData = await ipoService.createIpo(ipo);
  if (!resData.success) {
    throw new ApiError(422, "Ipo not added!");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, resData.data, "Ipo added successfully!"));
});

const getTrackerRequest = asyncHandler(async (req: Request, res: Response) => {
  const { year } = req.query as { year?: number };
  const resData = await ipoService.getTrackerData(Number(year));
  if (!resData.success) {
    throw new ApiError(422, "Data not found!");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(200, resData.data, "Tracker data fetched successfully!")
    );
});

const getSuggestedIpoRequest = asyncHandler(
  async (req: Request, res: Response) => {
    const resData = await ipoService.getSuggestedIpos();
    if (!resData.success) throw new ApiError(404, "Data not found!");

    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          resData.data,
          "Suggested Ipos fetched successfully!"
        )
      );
  }
);

const getGmpDataRequest = asyncHandler(async (req: Request, res: Response) => {
  const resData = await ipoService.getActiveIpoGmp();
  if (!resData.success) throw new ApiError(404, "Data not found!");
  return res
    .status(201)
    .json(new ApiResponse(201, resData.data, "GMP data fetched successfully!"));
});

export default {
  getRequest,
  getStatsRequest,
  getIpoRequest,
  postIpoRequest,
  patchIpoRequest,
  deleteIpoRequest,
  getTrackerRequest,
  getSuggestedIpoRequest,
  getGmpDataRequest,
};
