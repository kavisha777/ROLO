import express from 'express';
import { listItems, getItemById } from '../controllers/itemController.js';

const router = express.Router();

router.get('/', listItems);
router.get('/:id', getItemById);

export default router;
