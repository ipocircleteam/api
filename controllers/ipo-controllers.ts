import { Request, Response } from "express";
import { myDataSource } from "../database/db";
import ipoEntity from "../models/ipo.entity";

const getIpoData = async (req: Request, res: Response) => {
  try {
    const { concise, type } = req.query;
    var ipoData;

    if (concise) {
      ipoData = await myDataSource.getRepository(ipoEntity).find({
        where: {
          series: type,
        },
        select: {
          name: true,
          opening_date: true,
          closing_date: true,
        },
      });
    } else {
      ipoData = await myDataSource.getRepository(ipoEntity).find({
        where: {
          series: type,
        },
      });
    }

    res.status(200).send({
      success: true,
      data: ipoData,
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

export { getIpoData };
