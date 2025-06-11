import express from 'express';
import { listItems, getItemById , createItem ,updateItem,deleteItem} from '../controllers/itemController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();



router.post('/', authMiddleware (['admin', 'seller']), createItem);
router.get('/',authMiddleware(), listItems);
router.get('/:id',authMiddleware (['admin','seller','user']), getItemById);
router.put('/:id', authMiddleware(['admin', 'seller']), updateItem);
router.delete('/:id', authMiddleware(['admin', 'seller']), deleteItem);

export default router;
