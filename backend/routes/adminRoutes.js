import { revokeSeller } from '../controllers/adminController.js';
import express from 'express';
import { getAllUsers,updateUser,deleteUser} from '../controllers/adminController.js';
import authMiddleware from '../middleware/authMiddleware.js';


const router = express.Router();

// Protect this route — only admins allowed
router.get('/users', authMiddleware(['admin']), getAllUsers);
router.put('/users/:id', authMiddleware(['admin']), updateUser);
router.delete('/users/:id', authMiddleware(['admin']), deleteUser);
router.put('/revoke-seller/:id', authMiddleware(['admin']), revokeSeller);



export default router;
