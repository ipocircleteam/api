import express from "express";
import { ipoController } from "../controllers";

const ipoRouter = express.Router();

ipoRouter.get("/", ipoController.getRequest);
ipoRouter.get("/stats", ipoController.getStatsRequest);

export default ipoRouter;
