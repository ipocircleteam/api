"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ipo_controller_1 = require("../../controllers/web/ipo.controller");
const middlewares_1 = require("../../middlewares");
const router = express_1.default.Router();
router.get("/details", middlewares_1.ValidateInputs, ipo_controller_1.getIpoData);
router.get("/ipolist", middlewares_1.ValidateInputs, ipo_controller_1.getIpoList);
router.get("/details/id", middlewares_1.ValidateInputs, ipo_controller_1.getIpoDataFromId);
router.get("/count", middlewares_1.ValidateInputs, ipo_controller_1.getIpoCount);
router.post("/create", middlewares_1.ValidateInputs, ipo_controller_1.createIpoEntry);
router.patch("/update", middlewares_1.ValidateInputs, ipo_controller_1.updateIpoEntry);
exports.default = router;
