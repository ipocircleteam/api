"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRouter = void 0;
const express_1 = __importDefault(require("express"));
const reviews_controllers_1 = require("../controllers/reviews.controllers");
exports.reviewRouter = express_1.default.Router();
exports.reviewRouter.get("/details", reviews_controllers_1.getReviewData);
exports.reviewRouter.post("/create", reviews_controllers_1.createIpoReview);
exports.reviewRouter.patch("/update", reviews_controllers_1.updateIpoReview);
