import { Request, Response } from "express";
import { myDataSource } from "../../database/db";
import trackerEntity from "../../models/tracker.entity";
import initDb from "../../database/initDb";

// GET REQUEST
const getTrackerData = async (req: Request, res: Response) => {
  try {
    await initDb();
    const { year } = req.query;

    var trackerData = await myDataSource.getRepository(trackerEntity).find({
      where: {
        year: year,
      },
    });

    res.status(200).json({
      success: true,
      data: trackerData,
      msg: "Fetched data successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: [],
      msg: "Internal Server Error",
      error: error,
    });
  }
};

// POST REQUEST
const createTrackerEntry = async (req: Request, res: Response) => {
  try {
    await initDb();
    const trackerData = req.body;

    var created_tracker = await myDataSource
      .getRepository(trackerEntity)
      .create(trackerData);
    var save_tracker = await myDataSource
      .getRepository(trackerEntity)
      .save(created_tracker);

    res.status(200).json({
      success: true,
      msg: "Created data successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
      error: error,
    });
  }
};

// PATCH REQUEST
const updateTrackerEntry = async (req: Request, res: Response) => {
  try {
    await initDb();
    const trackerData = req.body;

    var save_tracker = await myDataSource
      .getRepository(trackerEntity)
      .save(trackerData);

    res.status(200).json({
      success: true,
      msg: "Updated data successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
      error: error,
    });
  }
};

export { getTrackerData, createTrackerEntry, updateTrackerEntry };
