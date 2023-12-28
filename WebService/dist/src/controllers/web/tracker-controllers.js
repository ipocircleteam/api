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
exports.updateTrackerEntry = exports.createTrackerEntry = exports.getTrackerWithSeries = exports.getTrackerData = void 0;
const db_1 = require("../../database/db");
const tracker_entity_1 = __importDefault(require("../../models/tracker.entity"));
const connectDb_1 = __importDefault(require("../../database/connectDb"));
const ipo_entity_1 = __importDefault(require("../../models/ipo.entity"));
// GET REQUEST
const getTrackerData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connectDb_1.default)();
        const { year } = req.query;
        var trackerData = yield db_1.myDataSource.getRepository(tracker_entity_1.default).find({
            where: {
                year: year,
            },
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
            error: error,
        });
    }
});
exports.getTrackerData = getTrackerData;
// GET TRACKER DATA WITH SERIES
const getTrackerWithSeries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        yield (0, connectDb_1.default)();
        const { year } = req.query;
        var eqData = [];
        var smeData = [];
        var alldata = [];
        var trackerData = yield db_1.myDataSource.getRepository(tracker_entity_1.default).find({
            where: {
                year: year,
            },
            order: {
                year: "DESC",
            },
        });
        for (let i = 0; i < 100; i++) {
            const id = trackerData[i].id;
            if (trackerData[i].issue_price !== null &&
                trackerData[i].listing_price !== null &&
                trackerData[i].sector !== null) {
                const ipoData = yield db_1.myDataSource.getRepository(ipo_entity_1.default).find({
                    where: {
                        id: id,
                    },
                    select: {
                        series: true,
                        name: true,
                    },
                });
                if (((_a = ipoData[0]) === null || _a === void 0 ? void 0 : _a.series) === "eq") {
                    eqData.push(trackerData[i]);
                }
                else if (((_b = ipoData[0]) === null || _b === void 0 ? void 0 : _b.series) === "sme") {
                    smeData.push(trackerData[i]);
                }
            }
            alldata.push(trackerData[i]);
        }
        const data = {
            all: alldata,
            main: eqData,
            sme: smeData,
        };
        console.log(data);
        res.status(200).json({
            success: true,
            data: data,
            msg: "Fetched data successfully",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: [],
            msg: "Internal Server Error",
            error: error,
        });
    }
});
exports.getTrackerWithSeries = getTrackerWithSeries;
// POST REQUEST
const createTrackerEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connectDb_1.default)();
        const trackerData = req.body;
        var created_tracker = yield db_1.myDataSource
            .getRepository(tracker_entity_1.default)
            .create(trackerData);
        var save_tracker = yield db_1.myDataSource
            .getRepository(tracker_entity_1.default)
            .save(created_tracker);
        res.status(200).json({
            success: true,
            msg: "Created data successfully",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
            error: error,
        });
    }
});
exports.createTrackerEntry = createTrackerEntry;
// PATCH REQUEST
const updateTrackerEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connectDb_1.default)();
        const trackerData = req.body;
        var save_tracker = yield db_1.myDataSource
            .getRepository(tracker_entity_1.default)
            .save(trackerData);
        res.status(200).json({
            success: true,
            msg: "Updated data successfully",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
            error: error,
        });
    }
});
exports.updateTrackerEntry = updateTrackerEntry;
