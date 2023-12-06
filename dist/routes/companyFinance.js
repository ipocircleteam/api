"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyFinanceRouter = void 0;
const express_1 = __importDefault(require("express"));
const companyFin_controllers_1 = require("../controllers/companyFin-controllers");
exports.companyFinanceRouter = express_1.default.Router();
exports.companyFinanceRouter.get("/details", companyFin_controllers_1.getCompanyFinanceData);
exports.companyFinanceRouter.post("/create", companyFin_controllers_1.createCompanyFinance);
exports.companyFinanceRouter.patch("/update", companyFin_controllers_1.updateCompanyFinance);