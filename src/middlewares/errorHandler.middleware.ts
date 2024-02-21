import { NextFunction } from "express";
import ApiError from "../utils/ApiError";

export default function ErrorHandler(
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";

  //@ts-ignore
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
}
