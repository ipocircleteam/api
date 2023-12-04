import { Request, Response } from "express";
import { myDataSource } from "../database/db";
import ipoEntity from "../models/ipo.entity";

const getIpoData = async (req: Request, res: Response) => {
  try {
    const { concise, type, count, start, end } = req.query;
    var ipoData;
    const ipoType = type === "main" ? "eq" : type;

    if (concise) {
      ipoData = await myDataSource.getRepository(ipoEntity).find({
        where: {
          series: ipoType,
        },
        select: {
          id: true,
          name: true,
          opening_date: true,
          closing_date: true,
        },
      });
    } else {
      ipoData = await myDataSource.getRepository(ipoEntity).find({
        where: {
          series: ipoType,
        },
      });
    }

    const chunkStart = start === undefined ? 0 : Number(start)
    const chunkEnd = end === undefined ? (count === undefined ? 150 : Number(count)) : Number(end)

    res.status(200).send({
      success: true,
      data: ipoData.slice(chunkStart, chunkEnd),
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
