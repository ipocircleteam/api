import express from "express";
import { getMarketFeed } from "../../controllers/upstox/marketfeed.controller";

const router = express.Router();

router.get("/marketfeed", getMarketFeed);

export default router