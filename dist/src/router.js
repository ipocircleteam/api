"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const ipodata_1 = __importDefault(require("./routes/web/ipodata"));
const trackerdata_1 = __importDefault(require("./routes/web/trackerdata"));
const algo_1 = __importDefault(require("./routes/web/algo"));
// import { gmpRouter } from "./routes/web/gmp";
const review_1 = __importDefault(require("./routes/web/review"));
const marketfeed_1 = __importDefault(require("./routes/upstoxRouter/marketfeed"));
const mail_1 = __importDefault(require("./routes/userRouter/mail"));
function Router() {
    // web apis
    app_1.app.use("/api/v1/ipo/", ipodata_1.default);
    app_1.app.use("/api/v1/tracker/", trackerdata_1.default);
    app_1.app.use("/api/v1/expertAlgo/", algo_1.default);
    // app.use("/api/v1/gmp/", gmpRouter);
    app_1.app.use("/api/v1/review/", review_1.default);
    // upstox apis
    app_1.app.use("/api/upstox/", marketfeed_1.default);
    // mail apis
    app_1.app.use("/api/v1/user/mail", mail_1.default);
}
exports.default = Router;
