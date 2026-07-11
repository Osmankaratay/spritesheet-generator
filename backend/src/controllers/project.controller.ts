import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middleware/auth';
import { ProjectService } from '../services/project.service';

export class ProjectController {
  private projectService = new ProjectService();

  async create(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const project = await this.projectService.create(req.userId, req.body);
      res.json({ success: true, data: project, error: null });
    } catch (error) {
      next(error);
    }
  }

  async list(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const projects = await this.projectService.list(req.userId, req.query);
      res.json({ success: true, data: projects, error: null });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const project = await this.projectService.getById(req.params.id, req.userId);
      res.json({ success: true, data: project, error: null });
    } catch (error) {
      next(error);
    }
  }

  async update(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const project = await this.projectService.update(req.params.id, req.userId, req.body);
      res.json({ success: true, data: project, error: null });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      await this.projectService.delete(req.params.id, req.userId);
      res.json({ success: true, data: { message: 'Project deleted' }, error: null });
    } catch (error) {
      next(error);
    }
  }
}
