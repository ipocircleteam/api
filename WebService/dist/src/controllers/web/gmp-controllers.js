"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.updateIpoGmp = exports.createIpoGMP = exports.getGmpData = void 0;
const connectDb_1 = __importDefault(require("../../database/connectDb"));
const db_1 = require("../../database/db");
const gmp_entity_1 = __importStar(require("../../models/gmp.entity"));
// GET REQUEST
const getGmpData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connectDb_1.default)();
        const { ipoId } = req.query;
        var resData;
        if (ipoId === undefined) {
            resData = yield db_1.myDataSource.getRepository(gmp_entity_1.default).find();
        }
        else {
            resData = yield db_1.myDataSource.getRepository(gmp_entity_1.default).findOne({
                where: {
                    ipo_id: ipoId,
                },
            });
        }
        if (!resData)
            res.status(400).json({ success: false, msg: "Ipo not found" });
        else
            res.status(200).json({
                success: true,
                msg: "Ipo found",
                data: resData,
            });
    }
    catch (error) {
        console.log(`Error in Gmp GET request : ${error}`);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
        });
    }
});
exports.getGmpData = getGmpData;
// POST REQUEST
const createIpoGMP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connectDb_1.default)();
        const reqData = req.body;
        if (!reqData) {
            res.status(400).json({ success: false, msg: "Invalid inputs passed!" });
            return;
        }
        const newIpoGmp = new gmp_entity_1.GMP();
        newIpoGmp.ipo_id = reqData.ipo_id;
        newIpoGmp.gmp_values = reqData.gmp_values;
        const createGmp = yield db_1.myDataSource
            .getRepository(gmp_entity_1.default)
            .create(newIpoGmp);
        if (!createGmp) {
            res.status(400).json({ success: false, msg: "error creating ipo gmp" });
            return;
        }
        const saveGmp = yield db_1.myDataSource.getRepository(gmp_entity_1.default).save(createGmp);
        if (!saveGmp) {
            res.status(400).json({ success: false, msg: "error saving ipo gmp" });
            return;
        }
        res.status(200).json({
            success: true,
            msg: "Ipo GMP Added",
        });
    }
    catch (error) {
        console.log(`Error in Gmp POST request : ${error}`);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
        });
    }
});
exports.createIpoGMP = createIpoGMP;
// PATCH REQUEST
const updateIpoGmp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connectDb_1.default)();
        const reqData = req.body;
        if (!reqData) {
            res.status(400).json({ success: false, msg: "Invalid inputs passed!" });
            return;
        }
        const updateGmp = yield db_1.myDataSource.getRepository(gmp_entity_1.default).save(reqData);
        if (!updateGmp) {
            res.status(400).json({ success: false, msg: "error updating ipo gmp" });
            return;
        }
        res.status(200).json({
            success: true,
            msg: "Ipo GMP Updated",
        });
    }
    catch (error) {
        console.log(`Error in Gmp PATCH request : ${error}`);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
        });
    }
});
exports.updateIpoGmp = updateIpoGmp;
