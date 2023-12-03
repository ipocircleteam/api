"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.algoRouter = void 0;
const express_1 = __importDefault(require("express"));
const algo_controllers_1 = require("../controllers/algo-controllers");
const express_validator_1 = require("express-validator");
const req_validator_1 = __importDefault(require("../middlewares/req-validator"));
exports.algoRouter = express_1.default.Router();
exports.algoRouter.post("/run", [
    (0, express_validator_1.check)("amount").notEmpty().isNumeric(),
    (0, express_validator_1.check)("no_of_demat_acc").notEmpty().isNumeric(),
    (0, express_validator_1.check)("risk_profile").notEmpty().isNumeric(),
], req_validator_1.default, algo_controllers_1.runAlgo);
