import express from "express";
import {
  createIpoEntry,
  getIpoCount,
  getIpoData,
  getIpoDataFromId,
  getIpoList,
  updateIpoEntry,
  getIpoStats,
} from "../../controllers/web/ipo.controller";
import { ValidateInputs } from "../../middlewares";
import { verifyAccessToken } from "../../middlewares/auth.middleware";

const router = express.Router();

router.get("/details", ValidateInputs, getIpoData);
router.get("/ipolist", ValidateInputs, getIpoList);
router.get("/details/id", ValidateInputs, getIpoDataFromId);
router.get("/count", ValidateInputs, getIpoCount);
router.post("/create", verifyAccessToken, ValidateInputs, createIpoEntry);
router.patch("/update", verifyAccessToken, ValidateInputs, updateIpoEntry);

router.get("/ipoStats",getIpoStats);

export default router;
