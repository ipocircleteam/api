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
exports.getIpoList = exports.updateIpoEntry = exports.createIpoEntry = exports.getIpoDataFromId = exports.getIpoData = void 0;
const db_1 = require("../../database/db");
const ipo_entity_1 = __importDefault(require("../../models/ipo.entity"));
const initDb_1 = __importDefault(require("../../database/initDb"));
// GET REQUEST
const getIpoData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, initDb_1.default)();
        const { concise, type, count, start, end } = req.query;
        var ipoData;
        const ipoType = type === "main" ? "eq" : type;
        if (concise) {
            ipoData = yield db_1.myDataSource.getRepository(ipo_entity_1.default).find({
                where: {
                    series: ipoType,
                },
                select: {
                    id: true,
                    name: true,
                    opening_date: true,
                    closing_date: true,
                },
                order: {
                    opening_date: 'DESC'
                }
            });
        }
        else {
            ipoData = yield db_1.myDataSource.getRepository(ipo_entity_1.default).find({
                where: {
                    series: ipoType,
                },
                order: {
                    opening_date: 'DESC'
                }
            });
        }
        const chunkStart = start === undefined ? 0 : Number(start);
        const chunkEnd = end === undefined
            ? count === undefined
                ? 150
                : Number(count)
            : Number(end);
        res.status(200).send({
            success: true,
            data: ipoData.slice(chunkStart, chunkEnd),
            msg: "Fetched data successfully",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            data: [],
            msg: "Internal Server Error",
            error: error,
        });
    }
});
exports.getIpoData = getIpoData;
// GET FROM ID REQUEST
const getIpoDataFromId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, initDb_1.default)();
        const { id, concise } = req.query;
        var ipoData;
        if (concise) {
            ipoData = yield db_1.myDataSource.getRepository(ipo_entity_1.default).find({
                where: {
                    id: id,
                },
                select: {
                    id: true,
                    name: true,
                    opening_date: true,
                    closing_date: true,
                },
            });
        }
        else {
            ipoData = yield db_1.myDataSource.getRepository(ipo_entity_1.default).find({
                where: {
                    id: id,
                },
            });
        }
        res.status(200).json({
            success: true,
            data: ipoData,
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
exports.getIpoDataFromId = getIpoDataFromId;
// GET REQUEST: IPO LIST
const getIpoList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, initDb_1.default)();
        const { series, segregated } = req.query;
        var resData;
        if (series === undefined) {
            resData = yield db_1.myDataSource.getRepository(ipo_entity_1.default).find({
                select: {
                    id: true,
                    name: true,
                },
                order: {
                    opening_date: 'DESC'
                }
            });
        }
        else if (segregated) {
            const all = yield db_1.myDataSource.getRepository(ipo_entity_1.default).find({
                select: {
                    id: true,
                    name: true,
                },
                order: {
                    opening_date: 'DESC'
                }
            });
            const main = yield db_1.myDataSource.getRepository(ipo_entity_1.default).find({
                select: {
                    id: true,
                    name: true,
                },
                where: {
                    series: "eq",
                },
                order: {
                    opening_date: 'DESC'
                }
            });
            const sme = yield db_1.myDataSource.getRepository(ipo_entity_1.default).find({
                select: {
                    id: true,
                    name: true,
                },
                where: {
                    series: "sme",
                },
                order: {
                    opening_date: 'DESC'
                }
            });
            resData = {
                all: all,
                main: main,
                sme: sme
            };
        }
        else {
            resData = yield db_1.myDataSource.getRepository(ipo_entity_1.default).find({
                select: {
                    id: true,
                    name: true,
                },
                where: {
                    series: series,
                },
                order: {
                    opening_date: 'DESC'
                }
            });
        }
        if (!resData) {
            res.status(400).json({ sucess: false, msg: "error fetching ipos list" });
            return;
        }
        res.status(200).json({
            success: true,
            msg: "Fetched IPOs list",
            data: resData,
        });
    }
    catch (error) {
        console.log(`Error in Ipo List GET request, ${error}`);
        res.status(500).json({
            success: false,
            data: [],
            msg: "Internal Server Error",
            error: error,
        });
    }
});
exports.getIpoList = getIpoList;
// POST REQUEST
const createIpoEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, initDb_1.default)();
        const ipo = req.body;
        const ipo_create = yield db_1.myDataSource.getRepository(ipo_entity_1.default).create(ipo);
        const results = yield db_1.myDataSource
            .getRepository(ipo_entity_1.default)
            .save(ipo_create);
        res.status(200).json({
            success: true,
            msg: "IPO saved successfully",
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
exports.createIpoEntry = createIpoEntry;
// PATCH REQUEST
const updateIpoEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, initDb_1.default)();
        const ipo = req.body;
        const ipo_update = yield db_1.myDataSource.getRepository(ipo_entity_1.default).save(ipo);
        res.status(200).json({
            success: true,
            msg: "IPO updated successfully",
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
exports.updateIpoEntry = updateIpoEntry;
