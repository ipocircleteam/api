import { ServiceResponse } from "../../types/services.types";
import generateTokens from "./generateTokens";
import saveRefreshToken from "./saveRefreshToken";
import { PrismaClient } from "@prisma/client";
import { LogError } from "../../utils";

const prisma = new PrismaClient();

const response: ServiceResponse = {
  success: false,
  data: {},
  errorMsg: "Something went wrong!",
};

type ResetPasswordType = {
  email: string;
  oldPassword: string;
  newPassword: string;
};

const resetPassword = async ({
  email,
  oldPassword,
  newPassword,
}: ResetPasswordType): Promise<ServiceResponse> => {
  try {
    if (!email || !oldPassword || !newPassword) {
      response.errorMsg = "Invalid inputs passed!";
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      response.errorMsg = "User does not exists!";
      return response;
    }

    if (user.password !== oldPassword) {
      response.errorMsg = "Invalid old password!";
      return response;
    }

    const isPasswordUpdated = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        password: newPassword,
      },
    });

    if (!isPasswordUpdated) {
      response.errorMsg = "Password updation failed!";
      return response;
    }

    response.success = true;
    return response;
  } catch (error) {
    LogError(error);
    return response;
  }
};

export default resetPassword;
