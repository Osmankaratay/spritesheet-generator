import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middleware/auth';
import { SpriteService } from '../services/sprite.service';

export class SpriteController {
  private spriteService = new SpriteService();

  async create(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const sprite = await this.spriteService.create(req.body);
      res.json({ success: true, data: sprite, error: null });
    } catch (error) {
      next(error);
    }
  }

  async list(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const sprites = await this.spriteService.list(req.query);
      res.json({ success: true, data: sprites, error: null });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const sprite = await this.spriteService.getById(req.params.id);
      res.json({ success: true, data: sprite, error: null });
    } catch (error) {
      next(error);
    }
  }

  async update(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const sprite = await this.spriteService.update(req.params.id, req.body);
      res.json({ success: true, data: sprite, error: null });
    } catch (error) {
      next(error);
    }
  }

  async getVersions(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const versions = await this.spriteService.getVersions(req.params.id);
      res.json({ success: true, data: versions, error: null });
    } catch (error) {
      next(error);
    }
  }

  async setActiveVersion(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const result = await this.spriteService.setActiveVersion(req.params.id, req.params.versionId);
      res.json({ success: true, data: result, error: null });
    } catch (error) {
      next(error);
    }
  }

  async removeBackground(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const result = await this.spriteService.removeBackground(req.params.id);
      res.json({ success: true, data: result, error: null });
    } catch (error) {
      next(error);
    }
  }
}
