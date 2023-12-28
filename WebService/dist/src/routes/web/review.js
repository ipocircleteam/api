"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRouter = void 0;
const express_1 = __importDefault(require("express"));
const reviews_controller_1 = require("../../controllers/web/reviews.controller");
exports.reviewRouter = express_1.default.Router();
exports.reviewRouter.get("/details", reviews_controller_1.getReviewData);
exports.reviewRouter.post("/create", reviews_controller_1.createIpoReview);
exports.reviewRouter.patch("/update", reviews_controller_1.updateIpoReview);
