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
exports.updateGmpDetails = exports.getGmpDetails = void 0;
const db_1 = __importDefault(require("../../db"));
const db_2 = require("../../db");
const gmp_entity_1 = __importDefault(require("../../models/ipo/gmp.entity"));
// GET GMP DETAILS
const getGmpDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, db_1.default)();
        const { id } = req.query;
        const gmpDetails = yield db_2.myDataSource.getRepository(gmp_entity_1.default).find({
            where: {
                ipo_id: id,
            },
        });
        if (!gmpDetails) {
            res.status(400).json({ success: false, msg: "Data not found!" });
            return;
        }
        res.status(200).json({
            success: false,
            msg: "Data found!",
            data: gmpDetails,
        });
    }
    catch (error) {
        console.log(`Error in GMP GET request, ${error}`);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
        });
    }
});
exports.getGmpDetails = getGmpDetails;
// UPDATE GMP DETAILS
const updateGmpDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, db_1.default)();
        const reqData = req.body;
        if (!reqData) {
            res.status(400).json({
                success: false,
                msg: "Invalid Inputs Passed!",
            });
        }
        const updateGmpDetails = yield db_2.myDataSource
            .getRepository(gmp_entity_1.default)
            .save(reqData);
        if (!updateGmpDetails) {
            res.status(400).json({ succes: false, msg: "Data not found" });
            return;
        }
        res.status(200).json({
            success: true,
            msg: "Data fetched successfully",
            data: updateGmpDetails,
        });
    }
    catch (error) {
        console.log(`Error in GMP PATCH request, ${error}`);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
        });
    }
});
exports.updateGmpDetails = updateGmpDetails;
