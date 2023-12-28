import express, { Request, Response } from "express";
import connectDb from "../../db";
import { myDataSource } from "../../db";
import gmpEntity from "../../models/gmp.entity";

// GET GMP DETAILS
const getGmpDetails = async (req: Request, res: Response) => {
  try {
    await connectDb();
    const { id } = req.query;

    const gmpDetails = await myDataSource.getRepository(gmpEntity).find({
      where: {
        ipo_id: id,
      },
    });

    if (!gmpDetails) {
      res.status(400).json({ success: false, msg: "Data not found!" });
      return;
    }

    res.status(200).json({
      success: false,
      msg: "Data found!",
      data: gmpDetails,
    });
  } catch (error) {
    console.log(`Error in GMP GET request, ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

// UPDATE GMP DETAILS
const updateGmpDetails = async (req: Request, res: Response) => {
  try {
    await connectDb();
    const reqData = req.body;
    if (!reqData) {
      res.status(400).json({
        success: false,
        msg: "Invalid Inputs Passed!",
      });
    }

    const updateGmpDetails = await myDataSource
      .getRepository(gmpEntity)
      .save(reqData);
    if (!updateGmpDetails) {
      res.status(400).json({ succes: false, msg: "Data not found" });
      return;
    }

    res.status(200).json({
      success: true,
      msg: "Data fetched successfully",
      data: updateGmpDetails,
    });
  } catch (error) {
    console.log(`Error in GMP PATCH request, ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

export { getGmpDetails, updateGmpDetails };
