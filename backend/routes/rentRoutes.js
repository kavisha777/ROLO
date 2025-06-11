import express from 'express';
import { createRent, cancelRent, getMyRentals } from '../controllers/rentController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware(['user', 'seller']), createRent);
router.get('/my', authMiddleware(['user', 'seller']), getMyRentals);
router.delete('/:id', authMiddleware(['user', 'seller']), cancelRent);

export default router;
