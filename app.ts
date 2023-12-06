import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import { ipoDataRouter } from "./routes/web/ipodata";
import { trackerRouter } from "./routes/web/trackerdata";
import { algoRouter } from "./routes/web/algo";
import initDb from "./database/initDb";
import { gmpRouter } from "./routes/web/gmp";
import { reviewRouter } from "./routes/web/review";
import { companyFinanceRouter } from "./routes/web/companyFinance";
import { adminIpoRouter } from "./routes/admin/ipoDetails";

dotenv.config();
console.log(`Node Environment is ${process.env.NODE_ENV}`);

const app = express();

const corsOptions = {
  origin: ["*", "http://localhost:3000", "https://dashboard-ipocircle.vercel.app", "https://ipocircle.com"],
  methods: "PUT, GET, DELETE, PATCH, OPTIONS, POST",
  allowedHeaders:
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  credentials: true,
  maxAge: 800,
};

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to IPO Circle APIs Phase 1");
});

// web apis
app.use("/api/v1/ipo/", ipoDataRouter);
app.use("/api/v1/tracker/", trackerRouter);
app.use("/api/v1/expertAlgo/", algoRouter);
app.use("/api/v1/gmp/", gmpRouter);
app.use("/api/v1/review/", reviewRouter);
app.use("/api/v1/companyfinance/", companyFinanceRouter);

//admin apis
app.use("/api/admin/v1/ipo/", adminIpoRouter)


app.listen(process.env.PORT || 6969, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT || 6969}`);
});

initDb()