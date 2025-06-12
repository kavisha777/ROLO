import express from 'express';
import { getUserProfile, updateUserProfile, becomeSeller } from '../controllers/userController.js';
import  authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/profile', authMiddleware(), getUserProfile);
router.put('/profile', authMiddleware(), updateUserProfile);
router.post('/becomeseller', authMiddleware() , becomeSeller);

export default router;
