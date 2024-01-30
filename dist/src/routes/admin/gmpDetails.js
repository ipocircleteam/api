"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminGmpRouter = void 0;
const express_1 = __importDefault(require("express"));
const gmp_controller_1 = require("../../controllers/admin/gmp.controller");
exports.adminGmpRouter = express_1.default.Router();
exports.adminGmpRouter.get("/details", gmp_controller_1.getGmpDetails);
exports.adminGmpRouter.patch("/update", gmp_controller_1.updateGmpDetails);
