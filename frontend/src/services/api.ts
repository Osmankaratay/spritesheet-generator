import axios from 'axios';

const API_URL = process.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (email: string, password: string, username: string) =>
    api.post('/auth/register', { email, password, username }),
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  getCurrentUser: () => api.get('/auth/me'),
  logout: () => api.post('/auth/logout')
};

export const projectAPI = {
  create: (data: any) => api.post('/projects', data),
  list: (query?: any) => api.get('/projects', { params: query }),
  getById: (id: string) => api.get(`/projects/${id}`),
  update: (id: string, data: any) => api.put(`/projects/${id}`, data),
  delete: (id: string) => api.delete(`/projects/${id}`)
};

export const analysisAPI = {
  create: (projectId: string, gddText: string) =>
    api.post('/analysis/create', { projectId, gddText }),
  getStatus: (id: string) => api.get(`/analysis/${id}/status`)
};

export const generationAPI = {
  start: (projectId: string, spriteIds: string[], fullAutoMode: boolean) =>
    api.post('/generation/start', { projectId, spriteIds, fullAutoMode }),
  getStatus: (id: string) => api.get(`/generation/${id}/status`),
  accept: (id: string, spriteId: string) =>
    api.post(`/generation/${id}/accept`, { spriteId }),
  toggleFullAutoMode: (id: string, enabled: boolean) =>
    api.put(`/generation/${id}/full-auto-mode`, { enabled })
};

export const downloadAPI = {
  downloadSprite: (id: string) => api.get(`/download/sprite/${id}`, { responseType: 'blob' }),
  downloadProject: (id: string) => api.get(`/download/project/${id}`, { responseType: 'blob' })
};

export default api;
