import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import AppRouter from "./router";
import { ApiError } from "./utils";
import { ErrorHandler, ValidateInputs } from "./middlewares";

const app = express();

const corsOptions = {
  origin: [
    "*",
    "http://localhost:3000",
    "https://dashboard-ipocircle.vercel.app",
    "https://ipocircle.com",
    "https://dashboard.ipocircle.com",
    "https://www.ipocircle.com",
  ],
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
// app.use(ValidateInputs);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to IPO Circle APIs Phase 1");
});

AppRouter();

export { app };
