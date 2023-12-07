"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const ipodata_1 = require("./routes/web/ipodata");
const trackerdata_1 = require("./routes/web/trackerdata");
const algo_1 = require("./routes/web/algo");
const initDb_1 = __importDefault(require("./database/initDb"));
const gmp_1 = require("./routes/web/gmp");
const review_1 = require("./routes/web/review");
const companyFinance_1 = require("./routes/web/companyFinance");
const ipoDetails_1 = require("./routes/admin/ipoDetails");
const trackerDetails_1 = require("./routes/admin/trackerDetails");
const gmpDetails_1 = require("./routes/admin/gmpDetails");
const reviewDetails_1 = require("./routes/admin/reviewDetails");
const marketfeed_1 = require("./routes/upstox/marketfeed");
dotenv_1.default.config();
console.log(`Node Environment is ${process.env.NODE_ENV}`);
const app = (0, express_1.default)();
const corsOptions = {
    origin: [
        "*",
        "http://localhost:3000",
        "https://dashboard-ipocircle.vercel.app",
        "https://ipocircle.com",
        "https://dashboard.ipocircle.com"
    ],
    methods: "PUT, GET, DELETE, PATCH, OPTIONS, POST",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    credentials: true,
    maxAge: 800,
};
app.use(express_1.default.json({ limit: "10mb" }));
app.use(express_1.default.urlencoded({ limit: "10mb", extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.get("/", (req, res) => {
    res.status(200).send("Welcome to IPO Circle APIs Phase 1");
});
// web apis
app.use("/api/v1/ipo/", ipodata_1.ipoDataRouter);
app.use("/api/v1/tracker/", trackerdata_1.trackerRouter);
app.use("/api/v1/expertAlgo/", algo_1.algoRouter);
app.use("/api/v1/gmp/", gmp_1.gmpRouter);
app.use("/api/v1/review/", review_1.reviewRouter);
app.use("/api/v1/companyfinance/", companyFinance_1.companyFinanceRouter);
//admin apis
app.use("/api/admin/v1/ipo/", ipoDetails_1.adminIpoRouter);
app.use('/api/admin/v1/tracker/', trackerDetails_1.adminTrackerRouter);
app.use("/api/admin/v1/gmp/", gmpDetails_1.adminGmpRouter);
app.use("/api/admin/v1/review/", reviewDetails_1.adminReviewRouter);
// upstox apis
app.use("/api/upstox/", marketfeed_1.marketFeedRouter);
app.listen(process.env.PORT || 6969, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT || 6969}`);
});
(0, initDb_1.default)();
