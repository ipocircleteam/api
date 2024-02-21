import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import {
  createIpoSchema,
  getIpoDataFromIdSchema,
  getIpoDataSchema,
  getIpoListSchema,
  ipoTrackerSchema,
  updateIpoQuerySchema,
} from "../zod/ipo.schema";
import dotenv from "dotenv";
import { trackerQuerySchema } from "../zod/tracker.schema";

dotenv.config();

interface ValidationSchema {
  query: ZodSchema | null;
  body: ZodSchema | null;
}

export default function ValidateInputs(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const urlPath = req.path;
    const { body, query }: ValidationSchema = getValidationSchema(urlPath);
    if (body !== null) body.parse(req.body);
    if (query !== null) query.parse(req.query);
    next();
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      status: 400,
      message: "Invalid inputs passed!",
      error: process.env.NODE_ENV === "DEVELOPMENT" ? error : {},
    });
  }
}

function getValidationSchema(urlPath: string) {
  const querySchemas: Record<string, ZodSchema | null> = {
    "/api/v1/ipo/details": getIpoDataSchema,
    "/api/v1/ipo/ipolist": getIpoListSchema,
    "/api/v1/ipo/details/id": getIpoDataFromIdSchema,
    "/api/v1/ipo/count": null,
    "/api/v1/ipo/create": null,
    "/api/v1/ipo/update": updateIpoQuerySchema,
    "/api/v1/tracker/details": trackerQuerySchema,
    "/api/v1/tracker/detailsWithSeries": trackerQuerySchema,
    "/api/v1/tracker/update": trackerQuerySchema,
  };

  const bodySchemas: Record<string, ZodSchema | null> = {
    "/api/v1/ipo/details": null,
    "/api/v1/ipo/ipolist": null,
    "/api/v1/ipo/details/id": null,
    "/api/v1/ipo/count": null,
    "/api/v1/ipo/create": createIpoSchema,
    "/api/v1/ipo/update": createIpoSchema,
    "/api/v1/tracker/details": null,
    "/api/v1/tracker/detailsWithSeries": null,
    "/api/v1/tracker/update": ipoTrackerSchema,
  };

  const resSchema: ValidationSchema = {
    query: querySchemas[urlPath],
    body: bodySchemas[urlPath],
  };

  return resSchema;
}
