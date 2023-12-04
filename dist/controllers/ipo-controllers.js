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
exports.getIpoDataFromId = exports.getIpoData = void 0;
const db_1 = require("../database/db");
const ipo_entity_1 = __importDefault(require("../models/ipo.entity"));
const getIpoData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // await initDb()
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
            });
        }
        else {
            ipoData = yield db_1.myDataSource.getRepository(ipo_entity_1.default).find({
                where: {
                    series: ipoType,
                },
            });
        }
        const chunkStart = start === undefined ? 0 : Number(start);
        const chunkEnd = end === undefined ? (count === undefined ? 150 : Number(count)) : Number(end);
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
        });
    }
});
exports.getIpoData = getIpoData;
const getIpoDataFromId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // await initDb()
        const { id, concise } = req.query;
        var ipoData;
        if (concise) {
            ipoData = yield db_1.myDataSource.getRepository(ipo_entity_1.default).find({
                where: {
                    id: id
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
                    id: id
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
        });
    }
});
exports.getIpoDataFromId = getIpoDataFromId;
