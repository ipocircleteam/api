import express from "express";
import {
  createTrackerEntry,
  getTrackerData,
  getTrackerWithSeries,
  updateTrackerEntry,
} from "../../controllers/web/tracker.controller";

export const trackerRouter = express.Router();

trackerRouter.get("/details", getTrackerData);

trackerRouter.get("/detailsWithSeries", getTrackerWithSeries)

trackerRouter.post("/create", createTrackerEntry);

trackerRouter.patch("/update", updateTrackerEntry);
