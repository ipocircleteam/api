import { NextFunction, Request, Response } from "express";
import getZodSchema from "../utils/getZodSchema";
import { ApiError } from "../utils";
import { SafeParseReturnType } from "zod";

const ValidateInputs = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { isSchemaFound, schema } = getZodSchema(
      req.baseUrl,
      req.method as "POST" | "GET" | "PATCH" | "DELETE" | "PUT"
    );

    if (JSON.stringify(req.body) === "{}") {
      throw new ApiError(400, "Inputs not passed!");
    }

    if (!isSchemaFound) {
      throw new ApiError(400, "Invalid route!");
    }

    const result = schema?.safeParse(req?.body);
    if (!result?.success) console.error(result?.error);

    if (result?.success) next();
    else throw new ApiError(400, "Invaid inputs passed!");
  } catch (error) {
    next(error);
  }
};

export default ValidateInputs;
