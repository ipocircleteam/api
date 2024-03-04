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
exports.getIpoCount = exports.getIpoList = exports.updateIpoEntry = exports.createIpoEntry = exports.getIpoDataFromId = exports.getIpoData = void 0;
const client_1 = require("@prisma/client");
const utils_1 = require("../../utils");
const prisma = new client_1.PrismaClient();
// GET REQUEST
const getIpoData = (0, utils_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { concise, type, count, start, end } = req.query;
    const ipoType = type === "main" ? "main" : "sme";
    var ipoData;
    if (concise) {
        ipoData = yield prisma.ipo.findMany({
            where: {
                series: ipoType,
            },
            select: {
                id: true,
                name: true,
                ipoDates: {
                    select: {
                        opening_date: true,
                        closing_date: true,
                    },
                },
            },
            orderBy: {
                ipoDates: {
                    opening_date: "desc",
                },
            },
        });
    }
    else {
        ipoData = yield prisma.ipo.findMany({
            where: {
                series: ipoType,
            },
            select: {
                id: true,
                name: true,
                ipoDates: {
                    select: {
                        opening_date: true,
                        closing_date: true,
                    },
                },
            },
            orderBy: {
                ipoDates: {
                    opening_date: "desc",
                },
            },
        });
    }
    if (!ipoData) {
        throw new utils_1.ApiError(404, "Data not found!");
    }
    const chunkStart = start === undefined ? 0 : Number(start);
    const chunkEnd = end === undefined
        ? count === undefined
            ? 150
            : Number(count)
        : Number(end);
    return res
        .status(201)
        .json(new utils_1.ApiResponse(200, ipoData.slice(chunkStart, chunkEnd), "Ipo Data Fetched Successfully!"));
}));
exports.getIpoData = getIpoData;
// GET FROM ID REQUEST
const getIpoDataFromId = (0, utils_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    var ipoData = yield prisma.ipo.findMany({
        where: {
            id: Number(id),
        },
        select: {
            ipoPrices: true,
            ipoContactDetails: true,
            ipoLots: true,
            ipoOtherDetails: true,
            ipoReview: true,
            ipoReservations: true,
            ipoAnchor: true,
            ipoDates: true,
            ipoShares: true,
            ipoFinances: true,
            ipoSubscriptions: true,
            ipoFinProgress: true,
        },
    });
    if (!ipoData)
        throw new utils_1.ApiError(404, "Data not found!");
    res
        .status(200)
        .json(new utils_1.ApiResponse(200, ipoData, "Data fetched successfully!"));
}));
exports.getIpoDataFromId = getIpoDataFromId;
// GET REQUEST: IPO LIST
const getIpoList = (0, utils_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { series, segregated } = req.query;
    var ipoList = yield prisma.ipo.findMany({
        select: {
            id: true,
            name: true,
            series: true,
        },
        orderBy: {
            ipoDates: {
                opening_date: "desc",
            },
        },
    });
    if (!ipoList)
        throw new utils_1.ApiError(404, "Data not found!");
    const mainIpoList = ipoList.filter((item) => item.series === "main");
    const smeIpoList = ipoList.filter((item) => item.series === "sme");
    const segregatedIpoList = {
        mainIpoList,
        smeIpoList,
    };
    var resData = Boolean(segregated) === true
        ? segregatedIpoList
        : series === "MAIN"
            ? mainIpoList
            : smeIpoList;
    res
        .status(200)
        .json(new utils_1.ApiResponse(200, resData, "Data fetched successfully!"));
}));
exports.getIpoList = getIpoList;
// GET REQUEST : NO OF IPOS
const getIpoCount = (0, utils_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const count = yield prisma.ipo.count();
    if (count < 0)
        throw new utils_1.ApiError(404, "Data not found!");
    res
        .status(200)
        .json(new utils_1.ApiResponse(200, { count }, "Data fetched successfully!"));
}));
exports.getIpoCount = getIpoCount;
// POST REQUEST
const createIpoEntry = (0, utils_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ipoData = req.body;
    let ipoId;
    try {
        const result = yield prisma.ipo.create({ data: ipoData.ipo });
        ipoId = result.id;
        const transaction = yield prisma.$transaction([
            prisma.ipo_Anchor.create({
                data: Object.assign({ ipo_id: ipoId }, ipoData.anchor),
            }),
            prisma.ipo_ContactDetails.create({
                data: Object.assign({ ipo_id: ipoId }, ipoData.contact),
            }),
            prisma.ipo_Dates.create({
                data: Object.assign({ ipo_id: ipoId }, ipoData.dates),
            }),
            prisma.ipo_FinProgress.create({
                data: { ipo_id: ipoId },
            }),
            prisma.ipo_Finances.create({
                data: Object.assign({ ipo_id: ipoId }, ipoData.finance),
            }),
            prisma.ipo_Gmp.create({ data: { ipo_id: ipoId } }),
            prisma.ipo_Lots.create({ data: Object.assign({ ipo_id: ipoId }, ipoData.lots) }),
            prisma.ipo_OtherDetails.create({
                data: Object.assign({ ipo_id: ipoId }, ipoData.otherDetails),
            }),
            prisma.ipo_Prices.create({
                data: Object.assign({ ipo_id: ipoId }, ipoData.prices),
            }),
            prisma.ipo_Reservations.create({
                data: Object.assign({ ipo_id: ipoId }, ipoData.reservations),
            }),
            prisma.ipo_Review.create({
                data: Object.assign({ ipo_id: ipoId }, ipoData.review),
            }),
            prisma.ipo_Shares.create({
                data: Object.assign({ ipo_id: ipoId }, ipoData.shares),
            }),
            prisma.ipo_Subscriptions.create({
                data: Object.assign({ ipo_id: ipoId }, ipoData.subscription),
            }),
            prisma.ipo_Tracker.create({
                data: Object.assign({ ipo_id: ipoId }, ipoData.tracker),
            }),
        ]);
        res
            .status(200)
            .json(new utils_1.ApiResponse(200, { ipoId: ipoId }, "Ipo added successfully!"));
    }
    catch (err) {
        console.log(err);
        throw new utils_1.ApiError(422, "data not added!", err);
    }
}));
exports.createIpoEntry = createIpoEntry;
// PATCH REQUEST
const updateIpoEntry = (0, utils_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ipoData = req.body;
    const { ipoId } = req.query;
    const updateIpo = yield prisma.ipo.update({
        where: {
            id: Number(ipoId),
        },
        data: ipoData,
    });
    if (!updateIpo)
        throw new utils_1.ApiError(422, "Failed to update Ipo!");
    res
        .status(200)
        .json(new utils_1.ApiResponse(200, updateIpo, "Ipo updated successfully!"));
}));
exports.updateIpoEntry = updateIpoEntry;
