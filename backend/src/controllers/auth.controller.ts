import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middleware/auth';
import { AuthService } from '../services/auth.service';
import { AppError } from '../middleware/errorHandler';

export class AuthController {
  private authService = new AuthService();

  async register(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const { email, password, username } = req.body;
      const result = await this.authService.register({ email, password, username });
      res.json({
        success: true,
        data: result,
        error: null
      });
    } catch (error) {
      next(error);
    }
  }

  async login(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const result = await this.authService.login(email, password);
      res.json({
        success: true,
        data: result,
        error: null
      });
    } catch (error) {
      next(error);
    }
  }

  async googleAuth(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      res.json({
        success: true,
        data: { redirectUrl: process.env.GOOGLE_AUTH_URL },
        error: null
      });
    } catch (error) {
      next(error);
    }
  }

  async googleCallback(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const { code } = req.query;
      const result = await this.authService.googleLogin(code as string);
      res.json({
        success: true,
        data: result,
        error: null
      });
    } catch (error) {
      next(error);
    }
  }

  async getCurrentUser(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const user = await this.authService.getUserById(req.userId);
      res.json({
        success: true,
        data: user,
        error: null
      });
    } catch (error) {
      next(error);
    }
  }

  async logout(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      res.json({
        success: true,
        data: { message: 'Logged out successfully' },
        error: null
      });
    } catch (error) {
      next(error);
    }
  }
}
