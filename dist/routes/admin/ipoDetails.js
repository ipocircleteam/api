"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminIpoRouter = void 0;
const express_1 = __importDefault(require("express"));
const ipo_controllers_1 = require("../../controllers/admin/ipo-controllers");
exports.adminIpoRouter = express_1.default.Router();
exports.adminIpoRouter.get("/details", ipo_controllers_1.getCompleteIpoDetails);
exports.adminIpoRouter.post("/create", ipo_controllers_1.addCompleteIpoDetails);
exports.adminIpoRouter.patch("/update", ipo_controllers_1.updateCompleteIpoDetails);
exports.adminIpoRouter.delete("/delete", ipo_controllers_1.deleteIpoById);
