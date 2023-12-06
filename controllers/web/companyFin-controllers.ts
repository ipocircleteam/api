import { Request, Response } from "express";
import initDb from "../../database/initDb";
import { myDataSource } from "../../database/db";
import company_financeEntity, {
  CompanyFinances,
} from "../../models/company_finance.entity";

// GET REQUEST
const getCompanyFinanceData = async (req: Request, res: Response) => {
  try {
    await initDb();
    const { ipoId } = req.query;
    var resData;

    if (ipoId === undefined) {
      resData = await myDataSource.getRepository(company_financeEntity).find();
    } else {
      resData = await myDataSource
        .getRepository(company_financeEntity)
        .findOne({
          where: {
            ipo_id: ipoId,
          },
        });
    }

    if (!resData)
      res
        .status(400)
        .json({ success: false, msg: "Company Finances not found" });
    else
      res.status(200).json({
        success: true,
        msg: "Company Finances found",
        data: resData,
      });
  } catch (error) {
    console.log(`Error in Company Finance GET request : ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

// POST REQUEST
const createCompanyFinance = async (req: Request, res: Response) => {
  try {
    await initDb();
    const reqData = req.body;
    if (!reqData) {
      res.status(400).json({ success: false, msg: "Invalid inputs passed!" });
      return;
    }

    const newFinance = new CompanyFinances();
    newFinance.ipo_id = reqData.ipo_id;
    newFinance.y2019 = reqData.y2019;
    newFinance.y2020 = reqData.y2020;
    newFinance.y2021 = reqData.y2021;
    newFinance.y2022 = reqData.y2022;
    newFinance.y2023 = reqData.y2023;
    newFinance.y2024 = reqData.y2024;

    const createFinance = await myDataSource
      .getRepository(company_financeEntity)
      .create(newFinance);

    if (!createFinance) {
      res
        .status(400)
        .json({ success: false, msg: "error creating company finance" });
      return;
    }

    const saveFinance = await myDataSource
      .getRepository(company_financeEntity)
      .save(createFinance);
    if (!saveFinance) {
      res
        .status(400)
        .json({ success: false, msg: "error saving company finance" });
      return;
    }

    res.status(200).json({
      success: true,
      msg: "Company Finance Added",
    });
  } catch (error) {
    console.log(`Error in Company Finance POST request : ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

// PATCH REQUEST
const updateCompanyFinance = async (req: Request, res: Response) => {
  try {
    await initDb();
    const reqData = req.body;
    if (!reqData) {
      res.status(400).json({ success: false, msg: "Invalid inputs passed!" });
      return;
    }

    const updateFinance = await myDataSource
      .getRepository(company_financeEntity)
      .save(reqData);
    if (!updateFinance) {
      res
        .status(400)
        .json({ success: false, msg: "error updating company finance" });
      return;
    }

    res.status(200).json({
      success: true,
      msg: "Company Finance Updated",
    });
  } catch (error) {
    console.log(`Error in Company Finance PATCH request : ${error}`);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

export { getCompanyFinanceData, createCompanyFinance, updateCompanyFinance };
