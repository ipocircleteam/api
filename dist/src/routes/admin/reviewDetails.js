"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminReviewRouter = void 0;
const express_1 = __importDefault(require("express"));
const review_controller_1 = require("../../controllers/admin/review.controller");
exports.adminReviewRouter = express_1.default.Router();
exports.adminReviewRouter.get("/details", review_controller_1.getReview);
exports.adminReviewRouter.patch("/update", review_controller_1.updateReview);
