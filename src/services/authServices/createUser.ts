import { ServiceResponse } from "../../types/services.types";
import { PrismaClient } from "@prisma/client";
import { LogError } from "../../utils";

const prisma = new PrismaClient();

type CreateUserType = {
  name: string;
  email: string;
  password: string;
};

const response: ServiceResponse = {
  success: false,
  data: {},
  errorMsg: "Something went wrong!",
};

const createUser = async ({
  name,
  email,
  password,
}: CreateUserType): Promise<ServiceResponse> => {
  try {
    if (!name || !email || !password) {
      response.errorMsg = "Invalid inputs passed!";
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      response.errorMsg = "User already exists!";
      return response;
    }

    const newUser = await prisma.user.create({
      data: { name, email, password },
    });
    response.success = true;
    response.data = newUser;
    return response;
  } catch (error) {
    LogError(error);
    return response;
  }
};

export default createUser;
