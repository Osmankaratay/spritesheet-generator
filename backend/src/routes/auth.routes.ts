import express from 'express';
import { AuthController } from '../controllers/auth.controller';
import { authenticate } from '../middleware/auth';

const router = express.Router();
const controller = new AuthController();

// Public routes
router.post('/register', (req, res, next) => controller.register(req, res, next));
router.post('/login', (req, res, next) => controller.login(req, res, next));
router.get('/google', (req, res, next) => controller.googleAuth(req, res, next));
router.get('/google/callback', (req, res, next) => controller.googleCallback(req, res, next));

// Protected routes
router.get('/me', authenticate, (req, res, next) => controller.getCurrentUser(req, res, next));
router.post('/logout', authenticate, (req, res, next) => controller.logout(req, res, next));

export default router;
