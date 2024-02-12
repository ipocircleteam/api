import express from "express";
import {
  getReview,
  updateReview,
} from "../../controllers/admin/review.controller";

export const adminReviewRouter = express.Router();

adminReviewRouter.get("/details", getReview);
adminReviewRouter.patch("/update", updateReview);
