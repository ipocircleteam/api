import express from 'express'
import { getTrackerData } from '../controllers/tracker-controllers'

export const trackerRouter = express.Router()

trackerRouter.get("/details", getTrackerData)