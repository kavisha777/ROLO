import express from 'express';
import { getUserProfile, updateUserProfile,upgradeToSeller } from '../controllers/userController.js';
import  authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/profile', authMiddleware(), getUserProfile);
router.put('/profile', authMiddleware(), updateUserProfile);
router.patch('/become-seller', authMiddleware() , upgradeToSeller);

export default router;
