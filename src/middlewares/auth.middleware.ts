import jwt from "jsonwebtoken";
import { asyncHandler, ApiError, ApiResponse } from "../utils";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface CustomRequest extends Request {
  userId?: number;
}

const verifyAccessToken = asyncHandler(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      throw new ApiError(401, "Access token not provided");
    }

    try {
      if (!process.env.ACCESS_TOKEN_SECRET) {
        throw new Error("ACCESS_TOKEN_SECRET is not defined");
      }

      const decoded = jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET
      ) as unknown;
      const decodedToken = decoded as { id: number; username: string };

      const user = await prisma.admin.findUnique({
        where: {
          id: decodedToken.id,
        },
      });

      req.userId = decodedToken.id;
      next();
    } catch (error) {
      throw new ApiError(401, "Invalid access token");
    }
  }
);

export { verifyAccessToken };
