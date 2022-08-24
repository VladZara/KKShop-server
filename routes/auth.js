import { Router } from "express";
import { register, login, getMe, getAll } from '../controllers/auth.js';

const router = Router();
import { authorize, protect } from '../middleware/authMiddleware.js';

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe)
router.get("/users", protect, authorize("admin"), getAll);

export default router;

