import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from './errorHandler';

export interface AuthRequest extends Request {
  userId: string;
  user: any;
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new AppError(401, 'UNAUTHORIZED', 'Missing authentication token');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as any;
    req.userId = decoded.id;
    next();
  } catch (error) {
    next(new AppError(401, 'UNAUTHORIZED', 'Invalid or expired token'));
  }
};

export const authorize = (roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user?.role)) {
      next(new AppError(403, 'FORBIDDEN', 'Insufficient permissions'));
    } else {
      next();
    }
  };
};
