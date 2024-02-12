import { app } from "./app";

import { ipoDataRouter } from "./routes/web/ipodata";
import { trackerRouter } from "./routes/web/trackerdata";
import { algoRouter } from "./routes/web/algo";
import { gmpRouter } from "./routes/web/gmp";
import { reviewRouter } from "./routes/web/review";
import { companyFinanceRouter } from "./routes/web/companyFinance";
import { adminIpoRouter } from "./routes/admin/ipoDetails";
import { adminTrackerRouter } from "./routes/admin/trackerDetails";
import { adminGmpRouter } from "./routes/admin/gmpDetails";
import { adminReviewRouter } from "./routes/admin/reviewDetails";
import { marketFeedRouter } from "./routes/upstox/marketfeed";
import { mailRouter } from "./routes/users/mail";

function Router() {
  // web apis
  app.use("/api/v1/ipo/", ipoDataRouter);
  app.use("/api/v1/tracker/", trackerRouter);
  app.use("/api/v1/expertAlgo/", algoRouter);
  app.use("/api/v1/gmp/", gmpRouter);
  app.use("/api/v1/review/", reviewRouter);
  app.use("/api/v1/companyfinance/", companyFinanceRouter);

  //admin apis
  app.use("/api/admin/v1/ipo/", adminIpoRouter);
  app.use("/api/admin/v1/tracker/", adminTrackerRouter);
  app.use("/api/admin/v1/gmp/", adminGmpRouter);
  app.use("/api/admin/v1/review/", adminReviewRouter);

  // upstox apis
  app.use("/api/upstox/", marketFeedRouter);

  // mail apis
  app.use("/api/v1/user/mail", mailRouter);
}

export default Router;
