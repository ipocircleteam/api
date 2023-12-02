import { Request, Response } from "express";
import { myDataSource } from "../database/db";
import trackerEntity from "../models/tracker.entity";

const getTrackerData = async (req: Request, res: Response) => {
  try {
    var trackerData = await myDataSource.getRepository(trackerEntity).find();
   
    res.status(200).send({
      success: true,
      data: trackerData,
      msg: "Fetched data successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      data: [],
      msg: "Internal Server Error",
    });
  }
};

export { getTrackerData };
