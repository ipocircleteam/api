import express from 'express'
import { getTrackerDetails, updateTrackerDetails } from '../../controllers/admin/tracker-controllers'

export const adminTrackerRouter = express.Router()

adminTrackerRouter.get("/details", getTrackerDetails)
adminTrackerRouter.patch("/update", updateTrackerDetails)