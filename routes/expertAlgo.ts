import express from 'express'
import { runAlgo } from '../controllers/algo-controllers'

export const algoRouter = express.Router()

algoRouter.post("/run", runAlgo)