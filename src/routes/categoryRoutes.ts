import { Router } from "express";
import { createCategory, getCategories, updateCategory, deleteCategory } from '../controllers/categoryController';
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router()

router.post('/', authenticateToken, createCategory);
router.get('/', authenticateToken, getCategories);
router.put('/:id', authenticateToken, updateCategory);
router.delete('/:id', authenticateToken, deleteCategory);

export default router;