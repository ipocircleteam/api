import express from "express";
import {
  addBlog,getBlog
} from "../../controllers/blog/blog.controller";
import { verifyAccessToken } from "../../middlewares/auth.middleware";

const router = express.Router();

router.post("/addBlog", verifyAccessToken, addBlog);
router.post("/getBlog/id", getBlog);
router.post("/updateBlog/id", verifyAccessToken, getBlog);

export default router;
