import express, { Request, Response } from "express";
import initDb from "../../database/initDb";
import { myDataSource } from "../../database/db";
import trackerEntity from "../../models/tracker.entity";

// GET TRACKER DETAILS
const getTrackerDetails = async (req: Request, res: Response) => {
  try {
      await initDb();
      const {id} = req.query

    const trackerDetails = await myDataSource
      .getRepository(trackerEntity)
        .find({
            where: {
              id: id
          }
      });
    if (!trackerDetails) {
      res.status(400).json({ success: false, msg: "Data not found!" });
      return;
    }

    res.status(200).json({
      success: false,
      msg: "Data found!",
      data: trackerDetails,
    });
  } catch (error) {
    console.log(`Error in Tracker GET request, ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
}; 


// UPDATE TRACKER DETAILS
const updateTrackerDetails = async (req: Request, res: Response) => {
  try {
    await initDb();
    const reqData = req.body;
    if (!reqData) {
      res.status(400).json({
        success: false,
        msg: "Invalid Inputs Passed!",
      });
    }

    const updateTrackerDetails = await myDataSource
      .getRepository(trackerEntity)
      .save(reqData);
    if (!updateTrackerDetails) {
      res.status(400).json({ succes: false, msg: "Data not found" });
      return;
    }

    res.status(200).json({
      success: true,
      msg: "Data fetched successfully",
      data: updateTrackerDetails,
    });
  } catch (error) {
    console.log(`Error in Tracker PATCH request, ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

export {getTrackerDetails, updateTrackerDetails}
