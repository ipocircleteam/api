import { ApiError, ApiResponse, asyncHandler } from "../utils";
import { Request, Response } from "express";
import { ipoService } from "../services";
import { getIpoQueries } from "../types/ipo.types";

// GET: Retrieve all the IPOs data with filters
const getRequest = asyncHandler(async (req: Request, res: Response) => {
  const { concise, type, count, page } = req.query as getIpoQueries;

  var ipoData = await ipoService.getIpoData(
    Boolean(concise),
    type,
    Number(count)
  );

  if (!ipoData.success)
    throw new ApiError(404, ipoData.errorMsg || "Something went wrong!");

  if (page) {
    //pagination
    const pageNo = Number(page);
    ipoData.data = ipoData.data.slice(20 * (pageNo - 1), 20 * pageNo);
  }

  return res
    .status(201)
    .json(new ApiResponse(201, ipoData.data, "Ipo Data Fetched Successfully!"));
});

// GET: Retrieve stats of all IPOs
const getStatsRequest = asyncHandler(async (req: Request, res: Response) => {
  const { type } = req.query as { type?: string };
  var reqData;

  if (type && (type === "main" || type === "sme")) {
    reqData = await ipoService.getIpoStats(type);
  } else if (!type) {
    const smeIpoStats = await ipoService.getIpoStats("sme");
    const mainIpoStats = await ipoService.getIpoStats("main");
    if (!mainIpoStats.success || !smeIpoStats.success) {
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

// GET: Retrieve complete IPO details based on Id
const getIpoRequest = asyncHandler(async (req: Request, res: Response) => {
  const ipoId = req.params.id;
  const { success, data, errorMsg } = await ipoService.getIpo(ipoId);
  if (!success) {
    throw new ApiError(404, errorMsg || "Something went wrong!");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, data, "Ipo fetched successfully!"));
});

// POST: Creates a new IPO entry
const postIpoRequest = asyncHandler(async (req: Request, res: Response) => {
  const ipo = req.body;
  const { success, data, errorMsg } = await ipoService.createIpo(ipo);
  if (!success) {
    throw new ApiError(422, errorMsg || "Ipo not added!");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, data, "Ipo added successfully!"));
});

// PATCH: Updates the IPO details
const patchIpoRequest = asyncHandler(async (req: Request, res: Response) => {
  //TODO
  // const ipo = req.body;
  // const resData = await ipoService.createIpo(ipo);
  // if (!resData.success) {
  //   throw new ApiError(422, "Ipo not added!");
  // }
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "API under maintenance!"));
});

//DELETE: Deletes the IPO and related data
const deleteIpoRequest = asyncHandler(async (req: Request, res: Response) => {
  const ipoId = req.params.id;
  const resData = await ipoService.deleteIpo(ipoId);
  if (!resData.success) {
    throw new ApiError(422, "Ipo deletion failed!");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Ipo deleted successfully!"));
});

//GET: Retrieves data for IPO Tracker
const getTrackerRequest = asyncHandler(async (req: Request, res: Response) => {
  const { year } = req.query as { year?: number };
  const { success, data, errorMsg } = await ipoService.getTrackerData(
    Number(year)
  );
  if (!success) {
    throw new ApiError(422, errorMsg || "Something went wrong!");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, data, "Tracker data fetched successfully!"));
});

//GET: Retrieves list of suggested IPOs
const getSuggestedIpoRequest = asyncHandler(
  async (req: Request, res: Response) => {
    const { success, data, errorMsg } = await ipoService.getSuggestedIpos();
    if (!success) throw new ApiError(404, errorMsg || "Something went wrong!");

    return res
      .status(201)
      .json(new ApiResponse(201, data, "Suggested Ipos fetched successfully!"));
  }
);

// GET: Retrieves GMP data of active IPOs
const getGmpDataRequest = asyncHandler(async (req: Request, res: Response) => {
  const { data, success, errorMsg } = await ipoService.getActiveIpoGmp();
  if (!success) throw new ApiError(404, errorMsg || "Something went wrong!");
  return res.status(201).json(new ApiResponse(201, data, "Fetched GMP data!"));
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
