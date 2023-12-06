"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackerRouter = void 0;
const express_1 = __importDefault(require("express"));
const tracker_controllers_1 = require("../../controllers/web/tracker-controllers");
exports.trackerRouter = express_1.default.Router();
exports.trackerRouter.get("/details", tracker_controllers_1.getTrackerData);
exports.trackerRouter.post("/create", tracker_controllers_1.createTrackerEntry);
exports.trackerRouter.patch("/update", tracker_controllers_1.updateTrackerEntry);
