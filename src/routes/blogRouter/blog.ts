import express from "express";
import {
  addBlog,getBlog
} from "../../controllers/blog/blog.controller";
import { verifyAccessToken } from "../../middlewares/auth.middleware";

const router = express.Router();

router.post("/addBlog", verifyAccessToken, addBlog);
router.post("/getBlog/id", getBlog);

export default router;
