import { Router } from "express";
import { register, login, getMe } from '../controllers/auth.js';

const router = Router();
import { protect } from '../middleware/authMiddleware.js';

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe)

export default router;

