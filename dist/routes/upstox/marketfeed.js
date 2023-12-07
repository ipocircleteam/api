"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketFeedRouter = void 0;
const express_1 = __importDefault(require("express"));
const marketfeed_1 = require("../../controllers/upstox/marketfeed");
exports.marketFeedRouter = express_1.default.Router();
exports.marketFeedRouter.get("/marketfeed", marketfeed_1.getMarketFeed);
