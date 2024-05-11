import { blogService } from "../services";
import { asyncHandler, ApiError, ApiResponse } from "../utils";
import { Request, Response } from "express";

const getBlogsRequest = asyncHandler(async (req: Request, res: Response) => {
  const { concise } = req.query;
  const isConcised: boolean = concise === "true" ? true : false;

  const response = await blogService.getAllBlogs(isConcised);
  if (!response.success) throw new ApiError(500, "Something went wrong!");

  return res
    .status(201)
    .json(new ApiResponse(201, response.data, "Blogs fetched successfuly!"));
});

export default {
  getBlogsRequest,
};
