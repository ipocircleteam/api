import express from "express";
import { createIpoGMP, getGmpData, updateIpoGmp } from "../controllers/gmp-controllers";

export const gmpRouter = express.Router();

gmpRouter.get("/details", getGmpData);

gmpRouter.post("/create", createIpoGMP);

gmpRouter.patch("/update", updateIpoGmp);
