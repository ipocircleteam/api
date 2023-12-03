import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import { myDataSource } from "./database/db";
import { ipoDataRouter } from "./routes/ipodata";
import { trackerRouter } from "./routes/trackerdata";
import { algoRouter } from "./routes/algo";

dotenv.config();
console.log(`Node Environment is ${process.env.NODE_ENV}`);

const app = express();

const corsOptions = {
  origin: "*",
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


app.use("/api/v1/ipo/", ipoDataRouter);
app.use("/api/v1/tracker/", trackerRouter);
app.use("/api/v1/expertAlgo/", algoRouter)


app.listen(process.env.PORT || 6969, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT || 6969}`);
});

myDataSource
  .initialize()
  .then(() => {
    console.log("DB Connected via Typeorm");
  })
  .catch((err) => {
    console.log(`Error during data source initialization: ${err}`);
    throw err;
  });
