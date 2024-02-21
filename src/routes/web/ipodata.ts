import express from "express";
import {
  createIpoEntry,
  getIpoCount,
  getIpoData,
  getIpoDataFromId,
  getIpoList,
  updateIpoEntry,
} from "../../controllers/web/ipo.controller";

const router = express.Router();

router.get("/details", getIpoData);
router.get("/ipolist", getIpoList);
router.get("/details/id", getIpoDataFromId);
router.get("/count", getIpoCount);
router.post("/create", createIpoEntry);
router.patch("/update", updateIpoEntry);

export default router;
