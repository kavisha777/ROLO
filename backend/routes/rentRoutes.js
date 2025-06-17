import express from 'express';
import {
  requestRent,respondToRentRequest,getUnavailableDates,getRequests,getMyApprovedRents,getMyItemsRentHistory} from '../controllers/rentController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { handlePaymentSuccess } from '../controllers/paymentController.js';


const router = express.Router();


router.get('/requests', authMiddleware(['seller']), getRequests);
router.get('/my-approved', authMiddleware(), getMyApprovedRents);
router.get('/seller/history', authMiddleware(['seller']), getMyItemsRentHistory);
router.get('/:itemId/unavailable', authMiddleware(), getUnavailableDates);
router.post('/', authMiddleware(), requestRent);
router.patch('/:rentId/respond', authMiddleware(['seller']), respondToRentRequest);
router.post('/payment/success', authMiddleware(), handlePaymentSuccess);



// router.patch('/:rentId/complete', authMiddleware(['seller']), completeRent);

export default router;
