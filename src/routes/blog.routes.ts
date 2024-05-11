import express from "express";
import { blogController } from "../controllers";

const blogRouter = express.Router();

blogRouter.get("/", blogController.getBlogsRequest);
blogRouter.get("/:id", blogController.getUniqueBlogRequest);

export default blogRouter;
