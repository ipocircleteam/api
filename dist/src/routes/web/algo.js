"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const algo_controller_1 = require("../../controllers/web/algo.controller");
const router = express_1.default.Router();
router.post("/run", algo_controller_1.runAlgo);
exports.default = router;
