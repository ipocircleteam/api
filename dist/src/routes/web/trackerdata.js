"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tracker_controller_1 = require("../../controllers/web/tracker.controller");
const router = express_1.default.Router();
router.get("/details", tracker_controller_1.getTrackerData);
router.get("/detailsWithSeries", tracker_controller_1.getTrackerWithSeries);
router.patch("/update", tracker_controller_1.updateTrackerEntry);
exports.default = router;
