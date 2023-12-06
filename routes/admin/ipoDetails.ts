import express from 'express'
import { addCompleteIpoDetails, deleteIpoById, getCompleteIpoDetails, updateCompleteIpoDetails } from '../../controllers/admin/ipo-controllers'

export const adminIpoRouter = express.Router()

adminIpoRouter.get("/details", getCompleteIpoDetails)
adminIpoRouter.post("/create", addCompleteIpoDetails)
adminIpoRouter.patch("/update", updateCompleteIpoDetails)
adminIpoRouter.delete("/delete", deleteIpoById)