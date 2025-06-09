import express from 'express';
import { listItems, getItemById , createItem } from '../controllers/itemController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();



router.post('/', authMiddleware (['admin', 'seller']), createItem);
router.get('/',authMiddleware(), listItems);
router.get('/:id',authMiddleware (['admin','seller','user']), getItemById);

export default router;
