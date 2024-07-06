import { Router } from "express";
import {registerUser, loginUser, updateProfile} from '../controllers/userController';
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

/**
 * User Registration
 */
router.post('/register', registerUser);
/**
 * User Login
 */
router.post('/login', loginUser);
/**
 * Updating user profile(requires authentication)
 */
router.put('/profile', authenticateToken, updateProfile);

export default router;