export interface User {
  id: string;
  email: string;
  username: string;
  role: 'admin' | 'user' | 'guest';
  quotaRemaining: number;
  quotaResetAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  userId: string;
  name: string;
  description: string;
  gddText: string;
  status: 'planning' | 'generating' | 'completed';
  artStyle: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Sprite {
  id: string;
  projectId: string;
  name: string;
  purpose: string;
  dimensions: string;
  animationTitle: string;
  frameCount: number;
  status: 'pending' | 'generated' | 'accepted';
  createdAt: Date;
  updatedAt: Date;
}

export interface SpriteVersion {
  id: string;
  spriteId: string;
  versionNumber: number;
  imageUrl: string;
  isActive: boolean;
  createdAt: Date;
}

export interface Generation {
  id: string;
  spriteId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  generatedImageUrl: string;
  generationTimeMs: number;
  prompt: string;
  createdAt: Date;
}

export interface RateLimit {
  id: string;
  userId: string;
  quotaTotal: number;
  quotaUsed: number;
  resetAt: Date;
  updatedAt: Date;
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  details: Record<string, any>;
  createdAt: Date;
}

export interface AnalysisPhase {
  phase: 'segmentation' | 'subdivision' | 'extraction';
  progress: number;
  retryStatus: {
    phase: string;
    retryAfter: number;
    startedAt: Date;
  } | null;
  results: any;
  error: { code: string; message: string } | null;
}

export interface GenerationQueue {
  spriteId: string;
  status: 'pending' | 'generated' | 'accepted';
  timestamp: Date;
}
