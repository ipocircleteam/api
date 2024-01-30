"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailRouter = void 0;
const express_1 = __importDefault(require("express"));
const email_controller_1 = require("../../controllers/users/email.controller");
exports.mailRouter = express_1.default.Router();
exports.mailRouter.post("/addMail", email_controller_1.saveUserMail);
