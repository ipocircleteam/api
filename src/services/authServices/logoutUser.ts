import { ServiceResponse } from "../../types/services.types";
import generateTokens from "./generateTokens";
import saveRefreshToken from "./saveRefreshToken";
import { PrismaClient } from "@prisma/client";
import { ApiError, LogError } from "../../utils";

const prisma = new PrismaClient();

const response: ServiceResponse = {
  success: false,
  data: {},
  errorMsg: "Something went wrong!",
};

type LogOutUserType = {
  userId: number;
  email: string;
};

const logoutUser = async ({
  email,
  userId,
}: LogOutUserType): Promise<ServiceResponse> => {
  try {
    if (!email || !userId) {
      response.errorMsg = "Invalid inputs passed!";
    }

    const user = await prisma.active_Sessions.findUnique({
      where: {
        userId: Number(userId),
      },
    });

    if (!user) {
      response.errorMsg = "User does not logged in!";
      return response;
    }

    const isUserLoggedOut = await prisma.active_Sessions.delete({
      where: {
        userId: userId,
      },
    });

    if (!isUserLoggedOut) throw new ApiError(500, "Something went wrong!");

    response.success = true;
    response.data = {};

    return response;
  } catch (error) {
    LogError(error);
    return response;
  }
};

export default logoutUser;
