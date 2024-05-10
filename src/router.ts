import { app } from "./app";
import ipoRouter from "./routes/ipo.routes";

function Router() {
  app.use("/api/v1/ipo", ipoRouter);
  app.use("/api/v1/blog", () => {});
  app.use("/api/v1/auth", () => {});
  app.use("/api/v1/user", () => {});
}

export default Router;

// app.use("/api/v1/ipo/stats", ipoDataRouter);
// app.use("/api/v1/ipo/suggested", () => {});
// app.use("/api/v1/ipo/tracker", () => {});
// app.use("/api/v1/ipo/gmp", () => {});
// app.use("/api/v1/ipo/algorithm", () => {});
