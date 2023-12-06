import express from 'express'
import { createIpoEntry, getIpoData, getIpoDataFromId, getIpoList, updateIpoEntry } from '../controllers/ipo-controllers';

export const ipoDataRouter = express.Router()

ipoDataRouter.get("/details", getIpoData)

ipoDataRouter.get("/ipolist", getIpoList)

ipoDataRouter.get("/details/id", getIpoDataFromId)

ipoDataRouter.post("/create", createIpoEntry)

ipoDataRouter.patch("/update", updateIpoEntry)