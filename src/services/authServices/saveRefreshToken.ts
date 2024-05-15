import { ServiceResponse } from "../../types/services.types";
import { PrismaClient } from "@prisma/client";
import { LogError } from "../../utils";

const prisma = new PrismaClient();

const response: ServiceResponse = {
  success: false,
  data: {},
  errorMsg: "Something went wrong!",
};

const saveRefreshToken = async (
  userId: number,
  refreshToken: string
): Promise<ServiceResponse> => {
  try {
    if (!userId || !refreshToken) {
      response.errorMsg = "Invalid inputs passed!";
      return response;
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      response.errorMsg = "Invalid request, User does not exists!";
      return response;
    }

    const saveToken = await prisma.active_Sessions.create({
      data: {
        userId,
        refresh_token: refreshToken,
      },
    });
    if (!saveToken) {
      response.errorMsg = "Error saving refresh token!";
      return response;
    }

    response.success = true;
    return response;
  } catch (error) {
    LogError(error);
    return response;
  }
};

export default saveRefreshToken;
