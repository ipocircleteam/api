import { app } from "./app";

import ipoDataRouter from "./routes/web/ipodata";
import trackerRouter from "./routes/web/trackerdata";
import algoRouter from "./routes/web/algo";
// import { gmpRouter } from "./routes/web/gmp";
import reviewRouter from "./routes/web/review";

import marketFeedRouter from "./routes/upstoxRouter/marketfeed";
import mailRouter from "./routes/userRouter/mail";
import adminRouter from "./routes/admin/admin";
import  blogRouter from "./routes/blogRouter/blog";
function Router() {
  // web apis
  app.use("/api/v1/ipo/", ipoDataRouter);
  app.use("/api/v1/tracker/", trackerRouter);
  app.use("/api/v1/expertAlgo/", algoRouter);
  // app.use("/api/v1/gmp/", gmpRouter);
  app.use("/api/v1/review/", reviewRouter);

  // upstox apis
  app.use("/api/upstox/", marketFeedRouter);

  // mail apis
  app.use("/api/v1/user/mail", mailRouter);

  //admin apis
  app.use("/api/v1/admin", adminRouter);
  
  //blog apis
  app.use("api/v1/blog",blogRouter);

}

export default Router;
