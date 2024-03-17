import express from "express";
import {
  addBlog
} from "../../controllers/blog/blog.controller";
import { verifyAccessToken } from "../../middlewares/auth.middleware";

const router = express.Router();

router.post("/addBlog", verifyAccessToken, addBlog);

export default router;
