import express from "express";
import { authController } from "../controllers";
import { ValidateRequest } from "../middlewares";

const authRouter = express.Router();

authRouter.post("/signup", authController.createUserRequest);
authRouter.post("/login", authController.loginUserRequest);
authRouter.post("/logout", authController.logoutUserRequest);
authRouter.post(
  "/resetPassword",
  ValidateRequest,
  authController.resetPasswordRequest
);

export default authRouter;
