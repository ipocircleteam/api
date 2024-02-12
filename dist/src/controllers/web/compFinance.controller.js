"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCompanyFinance = exports.createCompanyFinance = exports.getCompanyFinanceData = void 0;
const db_1 = __importDefault(require("../../db"));
const db_2 = require("../../db");
const company_finance_entity_1 = __importStar(require("../../models/ipo/company_finance.entity"));
// GET REQUEST
const getCompanyFinanceData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, db_1.default)();
        const { ipoId } = req.query;
        var resData;
        if (ipoId === undefined) {
            resData = yield db_2.myDataSource.getRepository(company_finance_entity_1.default).find();
        }
        else {
            resData = yield db_2.myDataSource
                .getRepository(company_finance_entity_1.default)
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
    }
    catch (error) {
        console.log(`Error in Company Finance GET request : ${error}`);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
        });
    }
});
exports.getCompanyFinanceData = getCompanyFinanceData;
// POST REQUEST
const createCompanyFinance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, db_1.default)();
        const reqData = req.body;
        if (!reqData) {
            res.status(400).json({ success: false, msg: "Invalid inputs passed!" });
            return;
        }
        const newFinance = new company_finance_entity_1.CompanyFinances();
        newFinance.ipo_id = reqData.ipo_id;
        newFinance.y2019 = reqData.y2019;
        newFinance.y2020 = reqData.y2020;
        newFinance.y2021 = reqData.y2021;
        newFinance.y2022 = reqData.y2022;
        newFinance.y2023 = reqData.y2023;
        newFinance.y2024 = reqData.y2024;
        const createFinance = yield db_2.myDataSource
            .getRepository(company_finance_entity_1.default)
            .create(newFinance);
        if (!createFinance) {
            res
                .status(400)
                .json({ success: false, msg: "error creating company finance" });
            return;
        }
        const saveFinance = yield db_2.myDataSource
            .getRepository(company_finance_entity_1.default)
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
    }
    catch (error) {
        console.log(`Error in Company Finance POST request : ${error}`);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
        });
    }
});
exports.createCompanyFinance = createCompanyFinance;
// PATCH REQUEST
const updateCompanyFinance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, db_1.default)();
        const reqData = req.body;
        if (!reqData) {
            res.status(400).json({ success: false, msg: "Invalid inputs passed!" });
            return;
        }
        const updateFinance = yield db_2.myDataSource
            .getRepository(company_finance_entity_1.default)
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
    }
    catch (error) {
        console.log(`Error in Company Finance PATCH request : ${error}`);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
        });
    }
});
exports.updateCompanyFinance = updateCompanyFinance;
