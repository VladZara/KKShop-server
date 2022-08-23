const { Router } = require('express');
const { register, login, getMe } = require('../controllers/auth');

const router = Router();
const { protect } = require('../middleware/authMiddleware')

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe)

module.exports = router;

