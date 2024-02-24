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
    const urlPath = req.baseUrl.substring(7) + req.path;
    
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
    "/ipo/details": getIpoDataSchema,
    "/ipo/ipolist": getIpoListSchema,
    "/ipo/details/id": getIpoDataFromIdSchema,
    "/ipo/count": null,
    "/ipo/create": null,
    "/ipo/update": updateIpoQuerySchema,
    "/tracker/details": trackerQuerySchema,
    "/tracker/detailsWithSeries": trackerQuerySchema,
    "/tracker/update": trackerQuerySchema,
  };

  const bodySchemas: Record<string, ZodSchema | null> = {
    "/ipo/details": null,
    "/ipo/ipolist": null,
    "/ipo/details/id": null,
    "/ipo/count": null,
    "/ipo/create": createIpoSchema,
    "/ipo/update": createIpoSchema,
    "/tracker/details": null,
    "/tracker/detailsWithSeries": null,
    "/tracker/update": ipoTrackerSchema,
  };

  const resSchema: ValidationSchema = {
    query: querySchemas[urlPath],
    body: bodySchemas[urlPath],
  };

  return resSchema;
}
