"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
const middlewares_1 = require("./middlewares");
dotenv_1.default.config({
    path: "../.env",
});
const port = process.env.PORT || 8080;
//@ts-ignore //TODO to be fixed later on
app_1.app.use(middlewares_1.ErrorHandler);
app_1.app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
