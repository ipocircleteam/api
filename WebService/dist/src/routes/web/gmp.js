"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gmpRouter = void 0;
const express_1 = __importDefault(require("express"));
const gmp_controller_1 = require("../../controllers/web/gmp.controller");
exports.gmpRouter = express_1.default.Router();
exports.gmpRouter.get("/details", gmp_controller_1.getGmpData);
exports.gmpRouter.post("/create", gmp_controller_1.createIpoGMP);
exports.gmpRouter.patch("/update", gmp_controller_1.updateIpoGmp);
