"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipoDataRouter = void 0;
const express_1 = __importDefault(require("express"));
const ipo_controller_1 = require("../../controllers/web/ipo.controller");
exports.ipoDataRouter = express_1.default.Router();
exports.ipoDataRouter.get("/details", ipo_controller_1.getIpoData);
exports.ipoDataRouter.get("/ipolist", ipo_controller_1.getIpoList);
exports.ipoDataRouter.get("/details/id", ipo_controller_1.getIpoDataFromId);
exports.ipoDataRouter.get("/count", ipo_controller_1.getIpoCount);
exports.ipoDataRouter.post("/create", ipo_controller_1.createIpoEntry);
exports.ipoDataRouter.patch("/update", ipo_controller_1.updateIpoEntry);
