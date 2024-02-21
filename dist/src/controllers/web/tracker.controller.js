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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTrackerEntry = exports.getTrackerWithSeries = exports.getTrackerData = void 0;
const utils_1 = require("../../utils");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// GET REQUEST
const getTrackerData = (0, utils_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { year } = req.query;
    const trackerData = yield prisma.ipo_Tracker.findMany({
        where: {
            year: Number(year),
        },
    });
    if (!trackerData)
        throw new utils_1.ApiError(404, "data not found!");
    res
        .status(200)
        .json(new utils_1.ApiResponse(200, trackerData, "data received successfully!"));
}));
exports.getTrackerData = getTrackerData;
// GET TRACKER DATA WITH SERIES
const getTrackerWithSeries = (0, utils_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { year } = req.query;
    const trackerData = yield prisma.ipo_Tracker.findMany({
        where: {
            year: Number(year),
        },
        select: {
            ipo: {
                select: {
                    id: true,
                    series: true,
                },
            },
        },
        orderBy: {
            year: "desc",
        },
    });
    const data = {
        all: trackerData,
        main: trackerData.filter((item) => item.ipo.series === "MAIN"),
        sme: trackerData.filter((item) => item.ipo.series === "SME"),
    };
    res
        .status(200)
        .json(new utils_1.ApiResponse(200, data, "data saved successfully!"));
}));
exports.getTrackerWithSeries = getTrackerWithSeries;
// PATCH REQUEST
const updateTrackerEntry = (0, utils_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const trackerData = req.body;
    const { ipoId } = req.query;
    const updateTracker = yield prisma.ipo_Tracker.update({
        where: {
            ipo_id: Number(ipoId),
        },
        data: trackerData,
    });
    if (!updateTracker)
        throw new utils_1.ApiError(404, "data not found!");
    res.status(200).json(new utils_1.ApiResponse(200, {}, "data updated successfully!"));
}));
exports.updateTrackerEntry = updateTrackerEntry;
