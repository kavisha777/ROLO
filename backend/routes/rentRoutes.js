import express from 'express';
import { createRental, getMyRentals } from '../controllers/rentController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware(['user', 'seller']), createRental);
router.get('/my', authMiddleware(['user', 'seller']), getMyRentals);

export default router;
