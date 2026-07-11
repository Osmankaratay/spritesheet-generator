import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { projectAPI } from '../services/api';
import { setProjects } from '../store/slices/projectSlice';
import { useNavigate } from 'react-router-dom';

export const ProjectAlbumPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items: projects, loading } = useSelector((state: RootState) => state.projects);
  const [filters, setFilters] = useState({ sort: 'date', category: '', dateRange: '' });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await projectAPI.list(filters);
        dispatch(setProjects(res.data.data));
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };
    fetchProjects();
  }, [filters, dispatch]);

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <Button variant="accent" onClick={() => navigate('/projects/new')}>
            Create New Project
          </Button>
        </div>

        {/* Filters */}
        <div className="border-2 border-gray-200 rounded p-4 flex gap-4">
          <select
            value={filters.sort}
            onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
            className="border-2 border-gray-300 px-3 py-2 rounded"
          >
            <option value="date">Date Created</option>
            <option value="name">Name (A-Z)</option>
            <option value="status">Status</option>
          </select>
          <input
            type="text"
            placeholder="Search projects..."
            className="border-2 border-gray-300 px-3 py-2 rounded flex-1"
          />
          <Button variant="secondary">Apply Filters</Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id}>
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                <span>{new Date(project.createdAt).toLocaleDateString()}</span>
                <span className="bg-gray-100 px-2 py-1 rounded">{project.status}</span>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => navigate(`/projects/${project.id}`)}
                className="w-full"
              >
                View Details
              </Button>
            </Card>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No projects yet</p>
            <Button variant="accent" onClick={() => navigate('/projects/new')}>
              Create Your First Project
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};
