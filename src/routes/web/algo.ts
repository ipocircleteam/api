import express from "express";
import { runAlgo } from "../../controllers/web/algo.controller";
import { check } from "express-validator";
import validateRequest from "../../middlewares/reqValidator.middleware";

export const algoRouter = express.Router();

algoRouter.post(
  "/run",
  [
    check("amount").notEmpty().isNumeric(),
    check("no_of_demat_acc").notEmpty().isNumeric(),
    check("risk_profile").notEmpty().isNumeric(),
  ],
  validateRequest,
  runAlgo
);
