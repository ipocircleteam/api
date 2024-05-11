import express from "express";
import { blogController } from "../controllers";

const blogRouter = express.Router();

blogRouter.get("/", blogController.getBlogsRequest);

export default blogRouter;
