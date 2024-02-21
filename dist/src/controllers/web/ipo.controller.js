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
const zod_1 = require("zod");
const ipo_schema_1 = require("../../zod/ipo.schema");
const utils_1 = require("../../utils");
const prisma = new client_1.PrismaClient();
// GET REQUEST
const getIpoData = (0, utils_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { concise, type, count, start, end } = ipo_schema_1.getIpoDataSchema.parse(req.query);
    const ipoType = type === "MAIN" ? "MAIN" : "SME";
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
    const { id } = ipo_schema_1.getIpoDataFromIdSchema.parse(req.query);
    var ipoData = yield prisma.ipo.findMany({
        where: {
            id: id,
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
    const { series, segregated } = ipo_schema_1.getIpoListSchema.parse(req.query);
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
    const mainIpoList = ipoList.filter((item) => item.series === "MAIN");
    const smeIpoList = ipoList.filter((item) => item.series === "SME");
    const segregatedIpoList = {
        mainIpoList,
        smeIpoList,
    };
    var resData = segregated === true
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
    if (!count)
        throw new utils_1.ApiError(404, "Data not found!");
    res
        .status(200)
        .json(new utils_1.ApiResponse(200, count, "Data fetched successfully!"));
}));
exports.getIpoCount = getIpoCount;
// POST REQUEST
const createIpoEntry = (0, utils_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ipoData = ipo_schema_1.createIpoSchema.parse(req.body);
    let ipoId;
    // i think it can be optimised further
    // interactive transaction: bcoz need ipoId from master Ipo Table Entry
    yield prisma
        .$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield tx.ipo.create({ data: ipoData.ipo });
        ipoId = result.id;
        yield tx.ipo_Anchor.create({
            data: Object.assign({ ipo_id: ipoId }, ipoData.anchor),
        });
        yield tx.ipo_ContactDetails.create({
            data: Object.assign({ ipo_id: ipoId }, ipoData.contact),
        });
        yield tx.ipo_Dates.create({ data: Object.assign({ ipo_id: ipoId }, ipoData.dates) });
        yield tx.ipo_FinProgress.create({
            data: { ipo_id: ipoId },
        });
        yield tx.ipo_Finances.create({
            data: Object.assign({ ipo_id: ipoId }, ipoData.finance),
        });
        yield tx.ipo_Gmp.create({ data: { ipo_id: ipoId } });
        yield tx.ipo_Lots.create({ data: Object.assign({ ipo_id: ipoId }, ipoData.lots) });
        yield tx.ipo_OtherDetails.create({
            data: Object.assign({ ipo_id: ipoId }, ipoData.otherDetails),
        });
        yield tx.ipo_Prices.create({
            data: Object.assign({ ipo_id: ipoId }, ipoData.prices),
        });
        yield tx.ipo_Reservations.create({
            data: Object.assign({ ipo_id: ipoId }, ipoData.reservations),
        });
        yield tx.ipo_Review.create({
            data: Object.assign({ ipo_id: ipoId }, ipoData.review),
        });
        yield tx.ipo_Shares.create({
            data: Object.assign({ ipo_id: ipoId }, ipoData.shares),
        });
        yield tx.ipo_Subscriptions.create({
            data: Object.assign({ ipo_id: ipoId }, ipoData.subscription),
        });
        yield tx.ipo_Tracker.create({
            data: Object.assign({ ipo_id: ipoId }, ipoData.tracker),
        });
    }))
        .then(() => {
        res
            .status(200)
            .json(new utils_1.ApiResponse(200, { ipo_id: ipoId }, "Ipo created successfully!"));
    })
        .catch((err) => {
        throw new utils_1.ApiError(422, "data not added!", err);
    });
}));
exports.createIpoEntry = createIpoEntry;
// PATCH REQUEST
const updateIpoEntry = (0, utils_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ipoData = ipo_schema_1.createIpoSchema.parse(req.body);
    const { ipoId } = zod_1.z.object({ ipoId: zod_1.z.number() }).parse(req.query);
    const updateIpo = yield prisma.ipo.update({
        where: {
            id: ipoId,
        },
        data: ipoData,
    });
    if (!updateIpo)
        throw new utils_1.ApiError(422, "Failed to update Ipo!");
    res
        .status(200)
        .json(new utils_1.ApiResponse(200, updateIpo, "Ipo created successfully!"));
}));
exports.updateIpoEntry = updateIpoEntry;
