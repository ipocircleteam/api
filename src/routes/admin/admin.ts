import express from "express";
import { addAdmin, loginAdmin, logoutAdmin, refreshAccessToken} from '../../controllers/admin/admin.controller';
import { verifyAccessToken } from "../../middlewares/auth.middleware";

const router = express.Router();

router.post("/addAdmin",addAdmin);
router.post('/loginAdmin',verifyAccessToken, loginAdmin);
router.post('/logoutAdmin',verifyAccessToken, logoutAdmin);
router.post('/refresh-token', refreshAccessToken);

export default router