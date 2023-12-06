import express from "express";
import {
  createCompanyFinance,
  getCompanyFinanceData,
  updateCompanyFinance,
} from "../../controllers/web/companyFin-controllers";

export const companyFinanceRouter = express.Router();

companyFinanceRouter.get("/details", getCompanyFinanceData);

companyFinanceRouter.post("/create", createCompanyFinance);

companyFinanceRouter.patch("/update", updateCompanyFinance);
