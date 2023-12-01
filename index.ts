import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { Router } from "express";
import { Request, Response } from "express";

dotenv.config();
const router = Router();

console.log(`Node Environment is ${process.env.NODE_ENV}`);

function StartServer() {
  try {
    const app = express();
    app.use(express.json({ limit: "10mb" }));
    app.use(express.urlencoded({ limit: "10mb", extended: true }));

    const corsOptions = {
      origin: "*",
      methods: "PUT, GET, DELETE, PATCH, OPTIONS, POST",
      allowedHeaders:
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      credentials: true,
      maxAge: 800,
    };

    app.use(cors(corsOptions));

    var server = http.createServer(app);

    router.get("/", (req: Request, res: Response) => {
      res.status(200).send("Welcome to IPO Circle APIs Phase 1");
    });

    server.listen(process.env.SERVER_PORT || 6969, () => {
      console.log(
        `Server is running on port ${process.env.SERVER_PORT || 6969}`
      );
    });
  } catch (error) {
    console.log("Error starting server");
  }
}

StartServer();
