import { app } from "./app";
import authRouter from "./routes/auth.routes";
import blogRouter from "./routes/blog.routes";
import ipoRouter from "./routes/ipo.routes";

function Router() {
  app.use("/api/v1/ipo", ipoRouter);
  app.use("/api/v1/blog", blogRouter);
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/user", () => {});
}

export default Router;

// app.use("/api/v1/ipo/stats", ipoDataRouter);
// app.use("/api/v1/ipo/suggested", () => {});
// app.use("/api/v1/ipo/tracker", () => {});
// app.use("/api/v1/ipo/gmp", () => {});
// app.use("/api/v1/ipo/algorithm", () => {});
