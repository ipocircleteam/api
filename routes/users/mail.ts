import express from 'express'
import { saveUserMail } from '../../controllers/users/email'

export const mailRouter = express.Router()

mailRouter.post("/addMail", saveUserMail)