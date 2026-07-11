import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { projectAPI } from '../services/api';
import { useNavigate } from 'react-router-dom';

interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  sprites: any[];
  createdAt: string;
}

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await projectAPI.getById(id!);
        setProject(res.data.data);
      } catch (error) {
        console.error('Failed to fetch project:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) return <Layout><div>Loading...</div></Layout>;
  if (!project) return <Layout><div>Project not found</div></Layout>;

  return (
    <Layout>
      <div className="space-y-8">
        <Button variant="secondary" onClick={() => navigate('/projects')}>
          ← Back to Projects
        </Button>

        <div>
          <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>Created: {new Date(project.createdAt).toLocaleDateString()}</span>
            <span>Status: {project.status}</span>
            <span>Assets: {project.sprites.length}</span>
          </div>
        </div>

        <div className="border-t-2 border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-6">Generated Sprites</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.sprites.map((sprite: any) => (
              <div key={sprite.id} className="border-2 border-gray-200 rounded overflow-hidden">
                <div className="bg-gray-100 h-40 flex items-center justify-center">
                  {sprite.imageUrl ? (
                    <img src={sprite.imageUrl} alt={sprite.name} className="h-full w-full object-cover" />
                  ) : (
                    <span className="text-gray-400">No image</span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{sprite.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{sprite.dimensions}</p>
                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm" className="flex-1">
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Button variant="accent" onClick={() => navigate(`/projects/${project.id}/generation`)}>
            Resume Project
          </Button>
          <Button variant="secondary" onClick={() => console.log('Download all')}>
            Download All Assets
          </Button>
        </div>
      </div>
    </Layout>
  );
};
