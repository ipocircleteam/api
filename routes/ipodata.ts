import express from 'express'
import { getIpoData } from '../controllers/ipo-controllers';

export const ipoDataRouter = express.Router()

ipoDataRouter.get("/details", getIpoData)
// concise=true, type=sme|main
