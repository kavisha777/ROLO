import express from 'express';
import { handlePaymentSuccess } from '../controllers/paymentController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/success', authMiddleware(['user', 'seller']), handlePaymentSuccess);

export default router;
