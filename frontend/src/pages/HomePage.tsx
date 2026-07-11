import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { RootState } from '../store';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleCreateProject = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/projects/new');
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="py-16 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4 text-black">AI-Powered Sprite Generation</h1>
            <p className="text-xl text-gray-600 mb-8">
              Analyze game design documents and generate pixel-perfect 2D spritesheets using advanced AI.
            </p>
            <Button variant="accent" size="lg" onClick={handleCreateProject}>
              Create New Project
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 mb-16 border-t-2 border-gray-200">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 p-6 rounded">
              <h3 className="text-xl font-bold mb-3">GDD Analysis</h3>
              <p className="text-gray-600">Automatically extract sprite requirements from game design documents.</p>
            </div>
            <div className="border-2 border-gray-200 p-6 rounded">
              <h3 className="text-xl font-bold mb-3">AI Generation</h3>
              <p className="text-gray-600">Generate high-quality spritesheets with advanced AI models.</p>
            </div>
            <div className="border-2 border-gray-200 p-6 rounded">
              <h3 className="text-xl font-bold mb-3">Sprite Editing</h3>
              <p className="text-gray-600">Edit, refine, and customize generated sprites with ease.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white text-center rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Amazing Sprites?</h2>
          <p className="text-gray-300 mb-8">Get started in minutes with our intuitive editor.</p>
          <Button variant="secondary" size="lg" onClick={handleCreateProject}>
            Start Now
          </Button>
        </section>
      </div>
    </Layout>
  );
};
