import express from "express";
import { ipoController } from "../controllers";
import { ValidateInputs, ValidateRequest } from "../middlewares";

const ipoRouter = express.Router();

ipoRouter.get("/", ipoController.getRequest);
ipoRouter.get("/:id", ipoController.getIpoRequest);
// ipoRouter.post("/", ValidateRequest, ValidateInputs, ipoController.postIpoRequest);
// ipoRouter.patch("/:id", ValidateRequest, ValidateInputs, ipoController.postIpoRequest);
// ipoRouter.delete("/:id", ValidateRequest, ValidateInputs, ipoController.postIpoRequest);
ipoRouter.get("/stats", ipoController.getStatsRequest);
ipoRouter.get("/tracker", ipoController.getTrackerRequest);

export default ipoRouter;
