import express from "express";
import { ipoController } from "../controllers";

const ipoRouter = express.Router();

ipoRouter.get("/", ipoController.getRequest);
// ipoRouter.post("/", ValidateRequest, ValidateInputs, ipoController.postIpoRequest);
// ipoRouter.patch("/:id", ValidateRequest, ValidateInputs, ipoController.postIpoRequest);
// ipoRouter.delete("/:id", ValidateRequest, ValidateInputs, ipoController.postIpoRequest);
ipoRouter.get("/stats", ipoController.getStatsRequest);
ipoRouter.get("/tracker", ipoController.getTrackerRequest);
ipoRouter.get("/suggested", ipoController.getSuggestedIpoRequest);
ipoRouter.get("/gmp", ipoController.getGmpDataRequest);
ipoRouter.get("/:id", ipoController.getIpoRequest);

export default ipoRouter;
