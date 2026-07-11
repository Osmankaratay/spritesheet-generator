import express from 'express';
import { AdminController } from '../controllers/admin.controller';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();
const controller = new AdminController();

router.use(authenticate);
router.use((req, res, next) => authorize(['admin'])(req, res, next));

// Dashboard
router.get('/dashboard', (req, res, next) => controller.getDashboard(req, res, next));
router.get('/metrics', (req, res, next) => controller.getMetrics(req, res, next));

// Users
router.get('/users', (req, res, next) => controller.listUsers(req, res, next));
router.put('/users/:id', (req, res, next) => controller.updateUser(req, res, next));
router.put('/users/bulk/quota', (req, res, next) => controller.bulkUpdateQuota(req, res, next));

// API Keys
router.post('/api-keys', (req, res, next) => controller.generateApiKey(req, res, next));
router.delete('/api-keys/:id', (req, res, next) => controller.revokeApiKey(req, res, next));

// Models
router.get('/models', (req, res, next) => controller.listModels(req, res, next));
router.put('/models/:id', (req, res, next) => controller.updateModel(req, res, next));

export default router;
