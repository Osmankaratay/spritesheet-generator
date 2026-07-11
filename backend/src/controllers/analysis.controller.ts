import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middleware/auth';
import { AnalysisService } from '../services/analysis.service';

export class AnalysisController {
  private analysisService = new AnalysisService();

  async create(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const { projectId, gddText } = req.body;
      const analysis = await this.analysisService.create(projectId, gddText, req.userId);
      res.json({ success: true, data: analysis, error: null });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const analysis = await this.analysisService.getById(req.params.id);
      res.json({ success: true, data: analysis, error: null });
    } catch (error) {
      next(error);
    }
  }

  async getStatus(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const status = await this.analysisService.getStatus(req.params.id);
      res.json({ success: true, data: status, error: null });
    } catch (error) {
      next(error);
    }
  }
}
