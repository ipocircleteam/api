"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
const db_1 = __importDefault(require("./db"));
dotenv_1.default.config({
    path: "../.env",
});
(0, db_1.default)()
    .then(() => {
    app_1.app.listen(process.env.PORT || 8080, () => {
        console.log(`Server running on port: ${process.env.PORT}`);
    });
})
    .catch((err) => {
    console.log(`Server startup failed! \n ${err}`);
});
