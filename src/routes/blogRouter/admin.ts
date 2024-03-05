import express from "express";
import { addAdmin, loginAdmin, logoutAdmin} from '../../controllers/web/admin.controller';
import { verifyAccessToken } from "../../middlewares/auth.middleware";

const router = express.Router();

router.post("/addAdmin",addAdmin);
router.post('/loginAdmin',verifyAccessToken, loginAdmin);
router.post('/logoutAdmin',verifyAccessToken, logoutAdmin);

export default router