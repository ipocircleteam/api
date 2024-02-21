"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reviews_controller_1 = require("../../controllers/web/reviews.controller");
const router = express_1.default.Router();
router.get("/details", reviews_controller_1.getReviewData);
router.post("/create", reviews_controller_1.createIpoReview);
router.patch("/update", reviews_controller_1.updateIpoReview);
exports.default = router;
