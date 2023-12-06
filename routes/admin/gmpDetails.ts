import express from 'express'
import { getGmpDetails, updateGmpDetails } from '../../controllers/admin/gmp-controllers'

export const adminGmpRouter = express.Router()

adminGmpRouter.get("/details", getGmpDetails)
adminGmpRouter.patch("/update", updateGmpDetails)