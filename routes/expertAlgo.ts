import express from "express";
import { runAlgo } from "../controllers/algo-controllers";
import { check } from "express-validator";
import validateRequest from "../utils/req-validator";

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
