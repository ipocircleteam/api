import express from "express";
import {
  getTrackerData,
  getTrackerWithSeries,
  updateTrackerEntry,
} from "../../controllers/web/tracker.controller";

const router = express.Router();

router.get("/details", getTrackerData);
router.get("/detailsWithSeries", getTrackerWithSeries);
router.patch("/update", updateTrackerEntry);

export default router;
