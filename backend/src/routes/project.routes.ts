import express from 'express';
import { ProjectController } from '../controllers/project.controller';
import { authenticate } from '../middleware/auth';

const router = express.Router();
const controller = new ProjectController();

// All routes require authentication
router.use(authenticate);

router.post('/', (req, res, next) => controller.create(req, res, next));
router.get('/', (req, res, next) => controller.list(req, res, next));
router.get('/:id', (req, res, next) => controller.getById(req, res, next));
router.put('/:id', (req, res, next) => controller.update(req, res, next));
router.delete('/:id', (req, res, next) => controller.delete(req, res, next));

export default router;
