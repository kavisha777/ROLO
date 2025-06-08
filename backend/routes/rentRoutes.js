import express from 'express';
import { requestRental, viewRentalHistory } from '../controllers/rentController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware(['user']), requestRental);
router.get('/history', authMiddleware(['user']), viewRentalHistory);

export default router;
