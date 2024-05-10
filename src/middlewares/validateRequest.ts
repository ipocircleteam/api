import { NextFunction } from "express";
import { asyncHandler } from "../utils";

const ValidateRequest = (req: Request, res: Response, next: NextFunction) => {
  next();
};

export default ValidateRequest;
