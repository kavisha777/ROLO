import express from 'express';
import { createRent, cancelRent,confirmRent, getMyRents, getSellerItemRents, getAllRents } from '../controllers/rentController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware(['user', 'seller']), createRent);
router.get('/my', authMiddleware(['user', 'seller']), getMyRents);
router.delete('/:id', authMiddleware(['user', 'seller']), cancelRent);
router.patch('/:id/confirm', authMiddleware(['seller']), confirmRent);
router.get('/seller-items', authMiddleware(['seller']), getSellerItemRents);
router.get('/all', authMiddleware(['admin']), getAllRents);

export default router;
