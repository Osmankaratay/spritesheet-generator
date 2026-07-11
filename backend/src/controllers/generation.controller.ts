import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middleware/auth';
import { GenerationService } from '../services/generation.service';

export class GenerationController {
  private generationService = new GenerationService();

  async start(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const { projectId, spriteIds, fullAutoMode } = req.body;
      const generation = await this.generationService.start(projectId, spriteIds, fullAutoMode, req.userId);
      res.json({ success: true, data: generation, error: null });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const generation = await this.generationService.getById(req.params.id);
      res.json({ success: true, data: generation, error: null });
    } catch (error) {
      next(error);
    }
  }

  async getStatus(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const status = await this.generationService.getStatus(req.params.id);
      res.json({ success: true, data: status, error: null });
    } catch (error) {
      next(error);
    }
  }

  async accept(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const { spriteId } = req.body;
      const result = await this.generationService.accept(req.params.id, spriteId);
      res.json({ success: true, data: result, error: null });
    } catch (error) {
      next(error);
    }
  }

  async regenerate(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const result = await this.generationService.regenerate(req.params.id);
      res.json({ success: true, data: result, error: null });
    } catch (error) {
      next(error);
    }
  }

  async pause(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const result = await this.generationService.pause(req.params.id);
      res.json({ success: true, data: result, error: null });
    } catch (error) {
      next(error);
    }
  }

  async resume(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const result = await this.generationService.resume(req.params.id);
      res.json({ success: true, data: result, error: null });
    } catch (error) {
      next(error);
    }
  }

  async toggleFullAutoMode(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const { enabled } = req.body;
      const result = await this.generationService.toggleFullAutoMode(req.params.id, enabled);
      res.json({ success: true, data: result, error: null });
    } catch (error) {
      next(error);
    }
  }
}
