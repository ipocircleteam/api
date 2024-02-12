import express from "express";
import {
  getTrackerDetails,
  getTrackerDetailsId,
  updateTrackerDetails,
} from "../../controllers/admin/tracker.controller";

export const adminTrackerRouter = express.Router();

adminTrackerRouter.get("/details", getTrackerDetails);
adminTrackerRouter.get("getIds", getTrackerDetailsId);
adminTrackerRouter.patch("/update", updateTrackerDetails);
