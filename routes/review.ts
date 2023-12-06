import express from "express";
import {
  createIpoReview,
  getReviewData,
  updateIpoReview,
} from "../controllers/reviews.controllers";

export const reviewRouter = express.Router();

reviewRouter.get("/details", getReviewData);

reviewRouter.post("/create", createIpoReview);

reviewRouter.patch("/update", updateIpoReview);
