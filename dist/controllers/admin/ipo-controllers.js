"use strict";
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
exports.deleteIpoById = exports.updateCompleteIpoDetails = exports.addCompleteIpoDetails = exports.getCompleteIpoDetails = void 0;
const db_1 = require("../../database/db");
const initDb_1 = __importDefault(require("../../database/initDb"));
const ipo_entity_1 = __importDefault(require("../../models/ipo.entity"));
const review_entity_1 = __importDefault(require("../../models/review.entity"));
const company_finance_entity_1 = __importDefault(require("../../models/company_finance.entity"));
// GET REQUEST
const getCompleteIpoDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, initDb_1.default)();
        const { ipoId } = req.query;
        const ipoResData = yield db_1.myDataSource.getRepository(ipo_entity_1.default).find({
            where: {
                id: ipoId,
            },
        });
        const reviewResData = yield db_1.myDataSource.getRepository(review_entity_1.default).find({
            where: {
                ipo_id: ipoId,
            },
        });
        const companyResData = yield db_1.myDataSource
            .getRepository(company_finance_entity_1.default)
            .find({
            where: {
                ipo_id: ipoId,
            },
        });
        if (ipoResData.length === 0 ||
            reviewResData.length === 0 ||
            companyResData.length === 0) {
            res.status(400).json({
                success: false,
                msg: "associated data not found",
            });
            return;
        }
        const data = {
            ipodetails: ipoResData,
            companyFinance: companyResData,
            reviews: reviewResData,
        };
        res.status(200).json({
            success: true,
            msg: "Data fetched successfully",
            data: data,
        });
    }
    catch (error) {
        console.log(`Error in Admin Ipo GET request, ${error}`);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
        });
    }
});
exports.getCompleteIpoDetails = getCompleteIpoDetails;
// POST REQUEST
const addCompleteIpoDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, initDb_1.default)();
        const reqData = req.body;
        if (!reqData.ipodetails || !reqData.companyFinance) {
            res.status(401).json({
                success: false,
                msg: "Invalid inputs passed!",
            });
            return;
        }
        console.log(reqData);
        const newIpoDetails = yield db_1.myDataSource
            .getRepository(ipo_entity_1.default)
            .create(reqData.ipodetails);
        const savedNewIpo = yield db_1.myDataSource
            .getRepository(ipo_entity_1.default)
            .save(newIpoDetails);
        const newCompanyFinance = yield db_1.myDataSource
            .getRepository(company_finance_entity_1.default)
            .create(reqData.companyFinance);
        const savedNewCompany = yield db_1.myDataSource
            .getRepository(company_finance_entity_1.default)
            .save(newCompanyFinance);
        const newReview = yield db_1.myDataSource
            .getRepository(review_entity_1.default)
            .create({
            ipo_id: reqData.ipodetails.id,
            review: ""
        });
        const savedNewReview = yield db_1.myDataSource
            .getRepository(review_entity_1.default)
            .save(newReview);
        if (!savedNewCompany || !savedNewIpo || !savedNewReview) {
            res.status(400).json({
                success: false,
                msg: "Error creating data",
            });
            return;
        }
        res.status(200).json({
            success: true,
            msg: "New Ipo Added",
        });
    }
    catch (error) {
        console.log(`Error in Admin Ipo POST request, ${error}`);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
        });
    }
});
exports.addCompleteIpoDetails = addCompleteIpoDetails;
// PATCH REQUEST
const updateCompleteIpoDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, initDb_1.default)();
        const reqData = req.body;
        if (!reqData.ipodetails || !reqData.companyFinance) {
            res.status(401).json({
                success: false,
                msg: "Invalid inputs passed!",
            });
            return;
        }
        const savedNewIpo = yield db_1.myDataSource
            .getRepository(ipo_entity_1.default)
            .save(reqData.ipodetails);
        const savedNewCompany = yield db_1.myDataSource
            .getRepository(company_finance_entity_1.default)
            .save(reqData.companyFinance);
        if (!savedNewCompany || !savedNewIpo) {
            res.status(400).json({
                success: false,
                msg: "Error updating data",
            });
            return;
        }
        res.status(200).json({
            success: true,
            msg: "Updated Ipo",
        });
    }
    catch (error) {
        console.log(`Error in Admin Ipo PATCH request, ${error}`);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
        });
    }
});
exports.updateCompleteIpoDetails = updateCompleteIpoDetails;
// DELETE REQUEST
const deleteIpoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, initDb_1.default)();
        const { id } = req.query;
        if (!id) {
            res.status(401).json({
                success: false,
                msg: "Invalid inputs passed!",
            });
            return;
        }
        const deleteIpo = yield db_1.myDataSource
            .getRepository(ipo_entity_1.default)
            .delete({ id: id });
        if (!deleteIpo) {
            res.status(400).json({
                success: false,
                msg: "Error deleting data",
            });
            return;
        }
        res.status(200).json({
            success: true,
            msg: "Deleted Ipo",
        });
    }
    catch (error) {
        console.log(`Error in Admin Ipo DELETE request, ${error}`);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
        });
    }
});
exports.deleteIpoById = deleteIpoById;
