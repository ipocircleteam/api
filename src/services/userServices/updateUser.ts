import { ServiceResponse } from "../../types/services.types";
import { PrismaClient } from "@prisma/client";
import logError from "../../utils/logError";
import { NewUser } from "../../types/user.types";

const prisma = new PrismaClient();

const updateUser = async (newUser: NewUser): Promise<ServiceResponse> => {
  try {
    const isUser = await prisma.user.findUniqueOrThrow({
      where: {
        id: newUser.id,
      },
    });

    const updatedUser = await prisma.user.update({
      where: {
        id: newUser.id,
      },
      data: {
        email: newUser.email,
        name: newUser.name,
      },
    });

    if (!updatedUser)
      return {
        success: false,
        errorMsg: "Something went wrong!",
      };

    return {
      success: true,
      data: updateUser,
    };
  } catch (error: any) {
    logError(error);
    return {
      success: false,
      errorMsg: (error.code = "P2025"
        ? "User not found!"
        : error.message || "Smething went wrong!"),
    };
  }
};

export default updateUser;
