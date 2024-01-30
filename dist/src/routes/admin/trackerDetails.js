"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminTrackerRouter = void 0;
const express_1 = __importDefault(require("express"));
const tracker_controller_1 = require("../../controllers/admin/tracker.controller");
exports.adminTrackerRouter = express_1.default.Router();
exports.adminTrackerRouter.get("/details", tracker_controller_1.getTrackerDetails);
exports.adminTrackerRouter.get("getIds", tracker_controller_1.getTrackerDetailsId);
exports.adminTrackerRouter.patch("/update", tracker_controller_1.updateTrackerDetails);
