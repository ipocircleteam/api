import express from "express";
import { runAlgo } from "../../controllers/web/algo.controller";

const router = express.Router();

router.post(
  "/run",
  runAlgo
);

export default router