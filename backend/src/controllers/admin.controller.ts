import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middleware/auth';
import { AdminService } from '../services/admin.service';

export class AdminController {
  private adminService = new AdminService();

  async getDashboard(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const dashboard = await this.adminService.getDashboard();
      res.json({ success: true, data: dashboard, error: null });
    } catch (error) {
      next(error);
    }
  }

  async getMetrics(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const metrics = await this.adminService.getMetrics();
      res.json({ success: true, data: metrics, error: null });
    } catch (error) {
      next(error);
    }
  }

  async listUsers(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const users = await this.adminService.listUsers(req.query);
      res.json({ success: true, data: users, error: null });
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const user = await this.adminService.updateUser(req.params.id, req.body);
      res.json({ success: true, data: user, error: null });
    } catch (error) {
      next(error);
    }
  }

  async bulkUpdateQuota(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const { userIds, quotaValue } = req.body;
      const result = await this.adminService.bulkUpdateQuota(userIds, quotaValue);
      res.json({ success: true, data: result, error: null });
    } catch (error) {
      next(error);
    }
  }

  async generateApiKey(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const apiKey = await this.adminService.generateApiKey(req.userId);
      res.json({ success: true, data: apiKey, error: null });
    } catch (error) {
      next(error);
    }
  }

  async revokeApiKey(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      await this.adminService.revokeApiKey(req.params.id);
      res.json({ success: true, data: { message: 'API key revoked' }, error: null });
    } catch (error) {
      next(error);
    }
  }

  async listModels(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const models = await this.adminService.listModels();
      res.json({ success: true, data: models, error: null });
    } catch (error) {
      next(error);
    }
  }

  async updateModel(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const model = await this.adminService.updateModel(req.params.id, req.body);
      res.json({ success: true, data: model, error: null });
    } catch (error) {
      next(error);
    }
  }
}
