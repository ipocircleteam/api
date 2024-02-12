import { Request, Response } from "express";
import { myDataSource } from "../../db";
import ipoEntity from "../../models/ipo/ipo.entity";
import connectDb from "../../db";
import company_financeEntity from "../../models/ipo/company_finance.entity";

// GET REQUEST
const getIpoData = async (req: Request, res: Response) => {
  try {
    await connectDb();

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
        order: {
          opening_date: "DESC",
        },
      });
    } else {
      ipoData = await myDataSource.getRepository(ipoEntity).find({
        where: {
          series: ipoType,
        },
        order: {
          opening_date: "DESC",
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

// GET FROM ID REQUEST
const getIpoDataFromId = async (req: Request, res: Response) => {
  try {
    await connectDb();
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

    var financeData = await myDataSource
      .getRepository(company_financeEntity)
      .find({
        where: {
          ipo_id: id,
        },
      });

    const data = { ipoData, financeData };

    res.status(200).json({
      success: true,
      data: data,
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

// GET REQUEST: IPO LIST
const getIpoList = async (req: Request, res: Response) => {
  try {
    await connectDb();
    const { series, segregated } = req.query;
    var resData;

    if (series === undefined) {
      resData = await myDataSource.getRepository(ipoEntity).find({
        select: {
          id: true,
          name: true,
        },
        order: {
          opening_date: "DESC",
        },
      });
    } else if (segregated) {
      const all = await myDataSource.getRepository(ipoEntity).find({
        select: {
          id: true,
          name: true,
        },
        order: {
          opening_date: "DESC",
        },
      });

      const main = await myDataSource.getRepository(ipoEntity).find({
        select: {
          id: true,
          name: true,
        },
        where: {
          series: "eq",
        },
        order: {
          opening_date: "DESC",
        },
      });

      const sme = await myDataSource.getRepository(ipoEntity).find({
        select: {
          id: true,
          name: true,
        },
        where: {
          series: "sme",
        },
        order: {
          opening_date: "DESC",
        },
      });

      resData = {
        all: all,
        main: main,
        sme: sme,
      };
    } else {
      resData = await myDataSource.getRepository(ipoEntity).find({
        select: {
          id: true,
          name: true,
        },
        where: {
          series: series,
        },
        order: {
          opening_date: "DESC",
        },
      });
    }

    if (!resData) {
      res.status(400).json({ sucess: false, msg: "error fetching ipos list" });
      return;
    }

    res.status(200).json({
      success: true,
      msg: "Fetched IPOs list",
      data: resData,
    });
  } catch (error) {
    console.log(`Error in Ipo List GET request, ${error}`);
    res.status(500).json({
      success: false,
      data: [],
      msg: "Internal Server Error",
      error: error,
    });
  }
};

// GET REQUEST : NO OF IPOS
const getIpoCount = async (req: Request, res: Response) => {
  try {
    await connectDb();
    const count = await myDataSource.getRepository(ipoEntity).count();

    res.status(200).json({
      success: true,
      data: [count],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: [-1],
    });
  }
};

// POST REQUEST
const createIpoEntry = async (req: Request, res: Response) => {
  try {
    await connectDb();
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

// PATCH REQUEST
const updateIpoEntry = async (req: Request, res: Response) => {
  try {
    await connectDb();
    const ipo = req.body;

    const ipo_update = await myDataSource.getRepository(ipoEntity).save(ipo);

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

export {
  getIpoData,
  getIpoDataFromId,
  createIpoEntry,
  updateIpoEntry,
  getIpoList,
  getIpoCount,
};
