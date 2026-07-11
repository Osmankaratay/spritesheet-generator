import express from 'express';
import { SpriteController } from '../controllers/sprite.controller';
import { authenticate } from '../middleware/auth';

const router = express.Router();
const controller = new SpriteController();

router.use(authenticate);

router.post('/', (req, res, next) => controller.create(req, res, next));
router.get('/', (req, res, next) => controller.list(req, res, next));
router.get('/:id', (req, res, next) => controller.getById(req, res, next));
router.put('/:id', (req, res, next) => controller.update(req, res, next));
router.get('/:id/versions', (req, res, next) => controller.getVersions(req, res, next));
router.post('/:id/versions/:versionId/set-active', (req, res, next) => controller.setActiveVersion(req, res, next));
router.post('/:id/remove-background', (req, res, next) => controller.removeBackground(req, res, next));

export default router;
