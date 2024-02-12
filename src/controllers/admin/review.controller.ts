import express, { Request, Response } from "express";
import connectDb from "../../db";
import { myDataSource } from "../../db";
import trackerEntity from "../../models/ipo/tracker.entity";
import gmpEntity from "../../models/ipo/gmp.entity";
import reviewEntity from "../../models/ipo/review.entity";

// GET IPO REVIEW
const getReview = async (req: Request, res: Response) => {
  try {
    await connectDb();
    const { id } = req.query;

    const reviewDetails = await myDataSource.getRepository(reviewEntity).find();
    if (!reviewDetails) {
      res.status(400).json({ success: false, msg: "Data not found!" });
      return;
    }

    res.status(200).json({
      success: false,
      msg: "Data found!",
      data: reviewDetails,
    });
  } catch (error) {
    console.log(`Error in Review GET request, ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

// UPDATE TRACKER DETAILS
const updateReview = async (req: Request, res: Response) => {
  try {
    await connectDb();
    const reqData = req.body;
    if (!reqData) {
      res.status(400).json({
        success: false,
        msg: "Invalid Inputs Passed!",
      });
    }

    const updateReview = await myDataSource
      .getRepository(reviewEntity)
      .save(reqData);
    if (!updateReview) {
      res.status(400).json({ succes: false, msg: "Data not found" });
      return;
    }

    res.status(200).json({
      success: true,
      msg: "Data fetched successfully",
      data: updateReview,
    });
  } catch (error) {
    console.log(`Error in Review PATCH request, ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

export { getReview, updateReview };
