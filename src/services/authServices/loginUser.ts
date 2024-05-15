import { ServiceResponse } from "../../types/services.types";
import { PrismaClient } from "@prisma/client";
import { LogError } from "../../utils";
import generateTokens from "./generateTokens";

const prisma = new PrismaClient();

const response: ServiceResponse = {
  success: false,
  data: {},
  errorMsg: "Something went wrong!",
};

type LoginUserType = {
  username: string;
  password: string;
};

const loginUser = async ({
  username,
  password,
}: LoginUserType): Promise<ServiceResponse> => {
  try {
    if (!username || !password) {
      response.errorMsg = "Invalid inputs passed!";
    }

    const user = await prisma.user.findUnique({
      where: {
        email: username,
      },
    });

    if (!user) {
      response.errorMsg = "User does not exists!";
      return response;
    }

    if (user.password !== password) {
      response.errorMsg = "Invalid email/password!";
      return response;
    }

    const res = await generateTokens(user);

    response.success = true;
    response.data = res.data;

    return response;
  } catch (error) {
    LogError(error);
    return response;
  }
};

export default loginUser;
