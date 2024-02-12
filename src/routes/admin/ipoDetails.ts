import express from "express";
import {
  addCompleteIpoDetails,
  deleteIpoById,
  getCompleteIpoDetails,
  updateCompleteIpoDetails,
} from "../../controllers/admin/ipo.controller";

export const adminIpoRouter = express.Router();

adminIpoRouter.get("/details", getCompleteIpoDetails);
adminIpoRouter.post("/create", addCompleteIpoDetails);
adminIpoRouter.patch("/update", updateCompleteIpoDetails);
adminIpoRouter.delete("/delete", deleteIpoById);
