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
exports.getTrackerData = void 0;
const db_1 = require("../database/db");
const tracker_entity_1 = __importDefault(require("../models/tracker.entity"));
const getTrackerData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // await initDb()
        const { year } = req.query;
        var trackerData = yield db_1.myDataSource.getRepository(tracker_entity_1.default).find({
            where: {
                year: year
            }
        });
        res.status(200).json({
            success: true,
            data: trackerData,
            msg: "Fetched data successfully",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: [],
            msg: "Internal Server Error",
        });
    }
});
exports.getTrackerData = getTrackerData;
