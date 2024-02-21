"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ipo_controller_1 = require("../../controllers/web/ipo.controller");
const router = express_1.default.Router();
router.get("/details", ipo_controller_1.getIpoData);
router.get("/ipolist", ipo_controller_1.getIpoList);
router.get("/details/id", ipo_controller_1.getIpoDataFromId);
router.get("/count", ipo_controller_1.getIpoCount);
router.post("/create", ipo_controller_1.createIpoEntry);
router.patch("/update", ipo_controller_1.updateIpoEntry);
exports.default = router;
