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
exports.updateTrackerDetails = exports.getTrackerDetails = void 0;
const initDb_1 = __importDefault(require("../../database/initDb"));
const db_1 = require("../../database/db");
const tracker_entity_1 = __importDefault(require("../../models/tracker.entity"));
// GET TRACKER DETAILS
const getTrackerDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, initDb_1.default)();
        const { id } = req.query;
        const trackerDetails = yield db_1.myDataSource
            .getRepository(tracker_entity_1.default)
            .find({
            where: {
                id: id
            }
        });
        if (!trackerDetails) {
            res.status(400).json({ success: false, msg: "Data not found!" });
            return;
        }
        res.status(200).json({
            success: false,
            msg: "Data found!",
            data: trackerDetails,
        });
    }
    catch (error) {
        console.log(`Error in Tracker GET request, ${error}`);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
        });
    }
});
exports.getTrackerDetails = getTrackerDetails;
// UPDATE TRACKER DETAILS
const updateTrackerDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, initDb_1.default)();
        const reqData = req.body;
        if (!reqData) {
            res.status(400).json({
                success: false,
                msg: "Invalid Inputs Passed!",
            });
        }
        const updateTrackerDetails = yield db_1.myDataSource
            .getRepository(tracker_entity_1.default)
            .save(reqData);
        if (!updateTrackerDetails) {
            res.status(400).json({ succes: false, msg: "Data not found" });
            return;
        }
        res.status(200).json({
            success: true,
            msg: "Data fetched successfully",
            data: updateTrackerDetails,
        });
    }
    catch (error) {
        console.log(`Error in Tracker PATCH request, ${error}`);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
        });
    }
});
exports.updateTrackerDetails = updateTrackerDetails;
