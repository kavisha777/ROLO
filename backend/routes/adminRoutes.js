// routes/adminRoutes.js
import express from 'express';
import { getAllUsers } from '../controllers/adminController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Protect this route — only admins allowed
router.get('/users', authMiddleware(['admin']), getAllUsers);

export default router;
