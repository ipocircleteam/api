import { ServiceResponse } from "../../types/services.types";
import { PrismaClient } from "@prisma/client";
import { LogError } from "../../utils";
import jwt from "jsonwebtoken";
import { User } from "../../types/user.types";

const prisma = new PrismaClient();

const response: ServiceResponse = {
  success: false,
  data: {},
  errorMsg: "Something went wrong!",
};

const generateTokens = async (user: User): Promise<ServiceResponse> => {
  try {
    if (!user) {
      response.errorMsg = "Invalid token data!";
      return response;
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    response.success = true;
    response.data = { accessToken, refreshToken };
    return response;
  } catch (error) {
    LogError(error);
    return response;
  }
};

const generateAccessToken = (data: User) => {
  if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new Error("ACCESS_TOKEN_SECRET is not defined");
  }
  return jwt.sign(
    { id: data.id, username: data.email, name: data.name },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );
};

const generateRefreshToken = (data: User) => {
  if (!process.env.REFRESH_TOKEN_SECRET) {
    throw new Error("REFRESH_TOKEN_SECRET is not defined");
  }
  return jwt.sign(
    { id: data.id, username: data.email, name: data.name },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1h" }
  );
};

export default generateTokens;
