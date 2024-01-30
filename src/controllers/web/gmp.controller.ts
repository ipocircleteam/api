import { Request, Response } from "express";
import connectDb from "../../db";
import { myDataSource } from "../../db";
import gmpEntity, { GMP } from "../../models/gmp.entity";
import { GMP_VALUE } from "../../types/gmp.types";

// GET REQUEST
const getGmpData = async (req: Request, res: Response) => {
  try {
    await connectDb();
    const { ipoId } = req.query;
    var resData: GMP_VALUE[] | unknown;

    if (ipoId === undefined) {
      resData = await myDataSource.getRepository(gmpEntity).find();
    } else {
      resData = await myDataSource.getRepository(gmpEntity).findOne({
        where: {
          ipo_id: ipoId,
        },
      });
    }

    if (!resData)
      res.status(400).json({ success: false, msg: "Ipo not found" });
    else
      res.status(200).json({
        success: true,
        msg: "Ipo found",
        data: resData,
      });
  } catch (error) {
    console.log(`Error in Gmp GET request : ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

// POST REQUEST
const createIpoGMP = async (req: Request, res: Response) => {
  try {
    await connectDb();
    const reqData = req.body;
    if (!reqData) {
      res.status(400).json({ success: false, msg: "Invalid inputs passed!" });
      return;
    }

    const newIpoGmp = new GMP();
    newIpoGmp.ipo_id = reqData.ipo_id;
    newIpoGmp.gmp_values = reqData.gmp_values;

    const createGmp = await myDataSource
      .getRepository(gmpEntity)
      .create(newIpoGmp);

    if (!createGmp) {
      res.status(400).json({ success: false, msg: "error creating ipo gmp" });
      return;
    }

    const saveGmp = await myDataSource.getRepository(gmpEntity).save(createGmp);
    if (!saveGmp) {
      res.status(400).json({ success: false, msg: "error saving ipo gmp" });
      return;
    }

    res.status(200).json({
      success: true,
      msg: "Ipo GMP Added",
    });
  } catch (error) {
    console.log(`Error in Gmp POST request : ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

// PATCH REQUEST
const updateIpoGmp = async (req: Request, res: Response) => {
  try {
    await connectDb();
    const reqData = req.body;
    if (!reqData) {
      res.status(400).json({ success: false, msg: "Invalid inputs passed!" });
      return;
    }

    const updateGmp = await myDataSource.getRepository(gmpEntity).save(reqData);
    if (!updateGmp) {
      res.status(400).json({ success: false, msg: "error updating ipo gmp" });
      return;
    }

    res.status(200).json({
      success: true,
      msg: "Ipo GMP Updated",
    });
  } catch (error) {
    console.log(`Error in Gmp PATCH request : ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

export { getGmpData, createIpoGMP, updateIpoGmp };
