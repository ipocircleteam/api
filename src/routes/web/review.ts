import express from "express";
import {
  createIpoReview,
  getReviewData,
  updateIpoReview,
} from "../../controllers/web/reviews.controller";

const router = express.Router();

router.get("/details", getReviewData);
router.post("/create", createIpoReview);
router.patch("/update", updateIpoReview);

export default router;
