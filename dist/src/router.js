"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const ipo_routes_1 = __importDefault(require("./routes/ipo.routes"));
function Router() {
    app_1.app.use("/api/v1/ipo", ipo_routes_1.default);
    app_1.app.use("/api/v1/blog", () => { });
    app_1.app.use("/api/v1/auth", () => { });
    app_1.app.use("/api/v1/user", () => { });
}
exports.default = Router;
// app.use("/api/v1/ipo/stats", ipoDataRouter);
// app.use("/api/v1/ipo/suggested", () => {});
// app.use("/api/v1/ipo/tracker", () => {});
// app.use("/api/v1/ipo/gmp", () => {});
// app.use("/api/v1/ipo/algorithm", () => {});
