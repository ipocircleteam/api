import express from "express";
import { saveUserMail } from "../../controllers/users/email.controller";

export const mailRouter = express.Router();

mailRouter.post("/addMail", saveUserMail);
