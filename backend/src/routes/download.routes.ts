import express from 'express';
import { DownloadController } from '../controllers/download.controller';
import { authenticate } from '../middleware/auth';

const router = express.Router();
const controller = new DownloadController();

router.use(authenticate);

router.get('/sprite/:id', (req, res, next) => controller.downloadSprite(req, res, next));
router.get('/sprite/:id/all-versions', (req, res, next) => controller.downloadAllVersions(req, res, next));
router.get('/project/:id', (req, res, next) => controller.downloadProject(req, res, next));

export default router;
