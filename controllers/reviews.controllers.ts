import { Request, Response } from "express";
import initDb from "../database/initDb";
import { myDataSource } from "../database/db";
import reviewEntity, { IpoReview } from "../models/review.entity";

// GET REQUEST
const getReviewData = async (req: Request, res: Response) => {
  try {
    await initDb();
    const { ipoId } = req.query;
    var resData;

    if (ipoId === undefined) {
      resData = await myDataSource.getRepository(reviewEntity).find();
    } else {
      resData = await myDataSource.getRepository(reviewEntity).findOne({
        where: {
          ipo_id: ipoId,
        },
      });
    }

    if (!resData)
      res.status(400).json({ success: false, msg: "Ipo review not found" });
    else
      res.status(200).json({
        success: true,
        msg: "Ipo review found",
        data: resData,
      });
  } catch (error) {
    console.log(`Error in Review GET request : ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};


// POST REQUEST
const createIpoReview = async (req: Request, res: Response) => {
  try {
    await initDb();
    const reqData = req.body;
    if (!reqData) {
      res.status(400).json({ success: false, msg: "Invalid inputs passed!" });
      return;
    }

    const newReview = new IpoReview();
    newReview.ipo_id = reqData.ipo_id;
    newReview.review = reqData.review;

    const createReview = await myDataSource
      .getRepository(reviewEntity)
      .create(newReview);

    if (!createReview) {
      res.status(400).json({ success: false, msg: "error creating ipo review" });
      return;
    }

    const saveReview = await myDataSource.getRepository(reviewEntity).save(createReview);
    if (!saveReview) {
      res.status(400).json({ success: false, msg: "error saving ipo review" });
      return;
    }

    res.status(200).json({
      success: true,
      msg: "Ipo Review Added",
    });
  } catch (error) {
    console.log(`Error in Review POST request : ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

// PATCH REQUEST
const updateIpoReview = async (req: Request, res: Response) => {
  try {
    await initDb();
    const reqData = req.body;
    if (!reqData) {
      res.status(400).json({ success: false, msg: "Invalid inputs passed!" });
      return;
    }

    const updateReview = await myDataSource.getRepository(reviewEntity).save(reqData);
    if (!updateReview) {
      res.status(400).json({ success: false, msg: "error updating ipo review" });
      return;
    }

    res.status(200).json({
      success: true,
      msg: "Ipo Review Updated",
    });
  } catch (error) {
    console.log(`Error in Review PATCH request : ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

export { getReviewData, createIpoReview, updateIpoReview };
