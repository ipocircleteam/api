import express from 'express'
import { getMarketFeed } from '../../controllers/upstox/marketfeed.controller'

export const marketFeedRouter = express.Router()

marketFeedRouter.get("/marketfeed", getMarketFeed)