import express from 'express';
import { AnalysisController } from '../controllers/analysis.controller';
import { authenticate } from '../middleware/auth';

const router = express.Router();
const controller = new AnalysisController();

router.use(authenticate);

router.post('/create', (req, res, next) => controller.create(req, res, next));
router.get('/:id', (req, res, next) => controller.getById(req, res, next));
router.get('/:id/status', (req, res, next) => controller.getStatus(req, res, next));

export default router;
