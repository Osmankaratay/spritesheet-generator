import express from 'express';
import { GenerationController } from '../controllers/generation.controller';
import { authenticate } from '../middleware/auth';

const router = express.Router();
const controller = new GenerationController();

router.use(authenticate);

router.post('/start', (req, res, next) => controller.start(req, res, next));
router.get('/:id', (req, res, next) => controller.getById(req, res, next));
router.get('/:id/status', (req, res, next) => controller.getStatus(req, res, next));
router.post('/:id/accept', (req, res, next) => controller.accept(req, res, next));
router.post('/:id/regenerate', (req, res, next) => controller.regenerate(req, res, next));
router.post('/:id/pause', (req, res, next) => controller.pause(req, res, next));
router.post('/:id/resume', (req, res, next) => controller.resume(req, res, next));
router.put('/:id/full-auto-mode', (req, res, next) => controller.toggleFullAutoMode(req, res, next));

export default router;
