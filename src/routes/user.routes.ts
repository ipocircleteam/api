import express from "express";
import { ValidateRequest } from "../middlewares";
import { userController } from "../controllers";

const userRouter = express.Router();

userRouter.patch(
  "/details/:id",
  ValidateRequest,
  userController.updateUserRequest
);

export default userRouter;
