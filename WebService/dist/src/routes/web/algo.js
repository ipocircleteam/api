"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.algoRouter = void 0;
const express_1 = __importDefault(require("express"));
const algo_controller_1 = require("../../controllers/web/algo.controller");
const express_validator_1 = require("express-validator");
const reqValidator_middleware_1 = __importDefault(require("../../middlewares/reqValidator.middleware"));
exports.algoRouter = express_1.default.Router();
exports.algoRouter.post("/run", [
    (0, express_validator_1.check)("amount").notEmpty().isNumeric(),
    (0, express_validator_1.check)("no_of_demat_acc").notEmpty().isNumeric(),
    (0, express_validator_1.check)("risk_profile").notEmpty().isNumeric(),
], reqValidator_middleware_1.default, algo_controller_1.runAlgo);
