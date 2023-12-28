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
exports.updateReview = exports.getReview = void 0;
const connectDb_1 = __importDefault(require("../../database/connectDb"));
const db_1 = require("../../database/db");
const review_entity_1 = __importDefault(require("../../models/review.entity"));
// GET IPO REVIEW
const getReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connectDb_1.default)();
        const { id } = req.query;
        const reviewDetails = yield db_1.myDataSource
            .getRepository(review_entity_1.default)
            .find();
        if (!reviewDetails) {
            res.status(400).json({ success: false, msg: "Data not found!" });
            return;
        }
        res.status(200).json({
            success: false,
            msg: "Data found!",
            data: reviewDetails,
        });
    }
    catch (error) {
        console.log(`Error in Review GET request, ${error}`);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
        });
    }
});
exports.getReview = getReview;
// UPDATE TRACKER DETAILS
const updateReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connectDb_1.default)();
        const reqData = req.body;
        if (!reqData) {
            res.status(400).json({
                success: false,
                msg: "Invalid Inputs Passed!",
            });
        }
        const updateReview = yield db_1.myDataSource
            .getRepository(review_entity_1.default)
            .save(reqData);
        if (!updateReview) {
            res.status(400).json({ succes: false, msg: "Data not found" });
            return;
        }
        res.status(200).json({
            success: true,
            msg: "Data fetched successfully",
            data: updateReview,
        });
    }
    catch (error) {
        console.log(`Error in Review PATCH request, ${error}`);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
        });
    }
});
exports.updateReview = updateReview;
