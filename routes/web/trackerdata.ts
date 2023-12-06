import express from "express";
import {
  createTrackerEntry,
  getTrackerData,
  updateTrackerEntry,
} from "../../controllers/web/tracker-controllers";

export const trackerRouter = express.Router();

trackerRouter.get("/details", getTrackerData);

trackerRouter.post("/create", createTrackerEntry);

trackerRouter.patch("/update", updateTrackerEntry);
