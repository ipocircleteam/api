"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const ipodata_1 = require("./routes/web/ipodata");
const trackerdata_1 = require("./routes/web/trackerdata");
const algo_1 = require("./routes/web/algo");
const gmp_1 = require("./routes/web/gmp");
const review_1 = require("./routes/web/review");
const companyFinance_1 = require("./routes/web/companyFinance");
const ipoDetails_1 = require("./routes/admin/ipoDetails");
const trackerDetails_1 = require("./routes/admin/trackerDetails");
const gmpDetails_1 = require("./routes/admin/gmpDetails");
const reviewDetails_1 = require("./routes/admin/reviewDetails");
const marketfeed_1 = require("./routes/upstox/marketfeed");
const mail_1 = require("./routes/users/mail");
function Router() {
    // web apis
    app_1.app.use("/api/v1/ipo/", ipodata_1.ipoDataRouter);
    app_1.app.use("/api/v1/tracker/", trackerdata_1.trackerRouter);
    app_1.app.use("/api/v1/expertAlgo/", algo_1.algoRouter);
    app_1.app.use("/api/v1/gmp/", gmp_1.gmpRouter);
    app_1.app.use("/api/v1/review/", review_1.reviewRouter);
    app_1.app.use("/api/v1/companyfinance/", companyFinance_1.companyFinanceRouter);
    //admin apis
    app_1.app.use("/api/admin/v1/ipo/", ipoDetails_1.adminIpoRouter);
    app_1.app.use("/api/admin/v1/tracker/", trackerDetails_1.adminTrackerRouter);
    app_1.app.use("/api/admin/v1/gmp/", gmpDetails_1.adminGmpRouter);
    app_1.app.use("/api/admin/v1/review/", reviewDetails_1.adminReviewRouter);
    // upstox apis
    app_1.app.use("/api/upstox/", marketfeed_1.marketFeedRouter);
    // mail apis
    app_1.app.use("/api/v1/user/mail", mail_1.mailRouter);
}
exports.default = Router;
