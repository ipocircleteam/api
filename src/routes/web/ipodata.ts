import express from "express";
import {
  createIpoEntry,
  getIpoCount,
  getIpoData,
  getIpoDataFromId,
  getIpoList,
  updateIpoEntry,
} from "../../controllers/web/ipo.controller";
import { ValidateInputs } from "../../middlewares";

const router = express.Router();

router.get("/details", ValidateInputs, getIpoData);
router.get("/ipolist", ValidateInputs, getIpoList);
router.get("/details/id", ValidateInputs, getIpoDataFromId);
router.get("/count", ValidateInputs, getIpoCount);
router.post("/create", ValidateInputs, createIpoEntry);
router.patch("/update", ValidateInputs, updateIpoEntry);

export default router;
