import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middleware/auth';
import { DownloadService } from '../services/download.service';

export class DownloadController {
  private downloadService = new DownloadService();

  async downloadSprite(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const file = await this.downloadService.getSprite(req.params.id);
      res.download(file.path, file.filename);
    } catch (error) {
      next(error);
    }
  }

  async downloadAllVersions(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const file = await this.downloadService.getAllVersions(req.params.id);
      res.download(file.path, file.filename);
    } catch (error) {
      next(error);
    }
  }

  async downloadProject(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const file = await this.downloadService.getProject(req.params.id);
      res.download(file.path, file.filename);
    } catch (error) {
      next(error);
    }
  }
}
