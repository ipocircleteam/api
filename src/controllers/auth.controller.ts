import {
  createUser,
  loginUser,
  logoutUser,
  resetPassword,
} from "../services/authServices";
import {
  LoginRequestBody,
  LogoutRequestBody,
  ResetPassRequestBody,
  SignupRequestBody,
} from "../types/auth.types";
import { ApiError, ApiResponse, asyncHandler } from "../utils";
import { Request, Response } from "express";

const createUserRequest = asyncHandler(async (req: Request, res: Response) => {
  // const isValid = validateInputs("createUser", req.body);
  // if (!isValid) throw new ApiError(400, "Invalid inputs passed!");
  const userData = req.body as SignupRequestBody;
  const isUserCreated = await createUser(userData);
  if (!isUserCreated.success) throw new ApiError(500, isUserCreated.errorMsg);
  return res
    .status(201)
    .json(
      new ApiResponse(201, isUserCreated.data, "User created successfully!")
    );
});

const loginUserRequest = asyncHandler(async (req: Request, res: Response) => {
  // const isValid = validateInputs("loginUser", req.body);
  // if (!isValid) throw new ApiError(400, "Invalid inputs passed!");
  const userCredentials = req.body as LoginRequestBody;
  const isUserLoggedIn = await loginUser(userCredentials);
  if (!isUserLoggedIn.success) throw new ApiError(500, isUserLoggedIn.errorMsg);
  return res
    .status(201)
    .json(new ApiResponse(201, isUserLoggedIn.data, "User login success!"));
});

const logoutUserRequest = asyncHandler(async (req: Request, res: Response) => {
  // const isValid = validateInputs("logoutUser", req.body);
  // if (!isValid) throw new ApiError(400, "Invalid inputs passed!");
  const userData = req.body as LogoutRequestBody;
  const isUserLoggedOut = await logoutUser(userData);
  if (!isUserLoggedOut.success)
    throw new ApiError(500, isUserLoggedOut.errorMsg);
  return res
    .status(201)
    .json(new ApiResponse(201, isUserLoggedOut.data, "User logout success!"));
});

const resetPasswordRequest = asyncHandler(
  async (req: Request, res: Response) => {
    // const isValid = validateInputs("resetPassword", req.body);
    // if (!isValid) throw new ApiError(400, "Invalid inputs passed!");
    const data = req.body as ResetPassRequestBody;
    const isPassReset = await resetPassword(data);
    if (!isPassReset.success) throw new ApiError(500, isPassReset.errorMsg);
    return res
      .status(201)
      .json(new ApiResponse(201, isPassReset.data, "Password reset success!"));
  }
);

export default {
  createUserRequest,
  loginUserRequest,
  logoutUserRequest,
  resetPasswordRequest,
};
