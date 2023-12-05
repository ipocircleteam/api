import { Request, Response } from "express";
import { myDataSource } from "../database/db";
import trackerEntity from "../models/tracker.entity";
import initDb from "../database/initDb";

const getTrackerData = async (req: Request, res: Response) => {
  try {
    // await initDb()
    const { year } = req.query
    
    var trackerData = await myDataSource.getRepository(trackerEntity).find({
      where: {
        year: year
      }
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
      error: error
    });
  }
};

export { getTrackerData };
