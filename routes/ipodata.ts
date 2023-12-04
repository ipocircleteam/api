import express from 'express'
import { getIpoData, getIpoDataFromId } from '../controllers/ipo-controllers';

export const ipoDataRouter = express.Router()

ipoDataRouter.get("/details", getIpoData)

ipoDataRouter.get("/details/id", getIpoDataFromId)