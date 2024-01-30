import express from "express";
import {
  createIpoEntry,
  getIpoCount,
  getIpoData,
  getIpoDataFromId,
  getIpoList,
  updateIpoEntry,
} from "../../controllers/web/ipo.controller";

export const ipoDataRouter = express.Router();

ipoDataRouter.get("/details", getIpoData);

ipoDataRouter.get("/ipolist", getIpoList);

ipoDataRouter.get("/details/id", getIpoDataFromId);

ipoDataRouter.get("/count", getIpoCount)

ipoDataRouter.post("/create", createIpoEntry);

ipoDataRouter.patch("/update", updateIpoEntry);
