import { Request, Response } from "express";
import { myDataSource } from "../database/db";
import ipoEntity from "../models/ipo.entity";
import initDb from "../database/initDb";
import { IPOdetails } from "../utils/types/ipoDetails";
import { IPO } from "../utils/types/ipo";

const getIpoData = async (req: Request, res: Response) => {
  try {
    await initDb();

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

    const chunkStart = start === undefined ? 0 : Number(start);
    const chunkEnd =
      end === undefined
        ? count === undefined
          ? 150
          : Number(count)
        : Number(end);

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
      error: error,
    });
  }
};

const getIpoDataFromId = async (req: Request, res: Response) => {
  try {
    await initDb();
    const { id, concise } = req.query;
    var ipoData;

    if (concise) {
      ipoData = await myDataSource.getRepository(ipoEntity).find({
        where: {
          id: id,
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
          id: id,
        },
      });
    }

    res.status(200).json({
      success: true,
      data: ipoData,
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

const createIpoEntry = async (req: Request, res: Response) => {
  try {
    await initDb();
    const ipo = req.body;

    const ipo_create = await myDataSource.getRepository(ipoEntity).create(ipo);
    const results = await myDataSource
      .getRepository(ipoEntity)
      .save(ipo_create);

    res.status(200).json({
      success: true,
      msg: "IPO saved successfully",
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


const updateIpoEntry = async (req: Request, res: Response) => {
  try {
    await initDb();
    const ipo = req.body;

    const ipo_update = await myDataSource
      .getRepository(ipoEntity)
      .save(ipo);

    res.status(200).json({
      success: true,
      msg: "IPO updated successfully",
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

export { getIpoData, getIpoDataFromId, createIpoEntry, updateIpoEntry };
