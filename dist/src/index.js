"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
dotenv_1.default.config({
    path: "../.env",
});
app_1.app.listen(process.env.PORT || 8080, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
});
