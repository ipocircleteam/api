"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyFinanceRouter = void 0;
const express_1 = __importDefault(require("express"));
const compFinance_controller_1 = require("../../controllers/web/compFinance.controller");
exports.companyFinanceRouter = express_1.default.Router();
exports.companyFinanceRouter.get("/details", compFinance_controller_1.getCompanyFinanceData);
exports.companyFinanceRouter.post("/create", compFinance_controller_1.createCompanyFinance);
exports.companyFinanceRouter.patch("/update", compFinance_controller_1.updateCompanyFinance);
