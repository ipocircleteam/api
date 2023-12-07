import express from 'express'
import { getMarketFeed } from '../../controllers/upstox/marketfeed'

export const marketFeedRouter = express.Router()

marketFeedRouter.get("/marketfeed", getMarketFeed)