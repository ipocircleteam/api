import { Request, Response } from "express";
import { ApiError, ApiResponse, asyncHandler, validateInputs } from "../utils";
import { NewUser } from "../types/user.types";
import { userService } from "../services";

const updateUserRequest = asyncHandler(async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const userData: NewUser = { id: userId, ...req.body };
  if (!validateInputs("update user data", userData))
    throw new ApiError(400, "Invalid inputs passed!");

  const { success, errorMsg, data } = await userService.updateUser(userData);
  if (!success) throw new ApiError(500, errorMsg);

  return res
    .status(200)
    .json(new ApiResponse(200, data, "User updated successfully!"));
});

export default { updateUserRequest };
