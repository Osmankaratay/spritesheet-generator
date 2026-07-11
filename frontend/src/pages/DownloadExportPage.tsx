import React from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const DownloadExportPage: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Download & Export</h1>
          <p className="text-gray-600">Package and download your completed assets</p>
        </div>

        {/* Individual Sprites */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Generated Sprites</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i}>
                <div className="bg-gray-100 h-40 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Sprite {i}</span>
                </div>
                <h3 className="font-bold mb-4">Sprite {i}</h3>
                <div className="space-y-2">
                  <Button variant="secondary" className="w-full text-sm">
                    Download PNG
                  </Button>
                  <Button variant="secondary" className="w-full text-sm">
                    All Versions
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bulk Download */}
        <div className="border-t-2 border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Bulk Download</h2>
          <Card>
            <p className="text-gray-600 mb-4">Download all project assets as a ZIP file</p>
            <Button variant="accent" size="lg" className="w-full">
              Download All Assets
            </Button>
          </Card>
        </div>

        {/* Project Info */}
        <div className="border-t-2 border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Project Summary</h2>
          <Card>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-gray-500 text-sm">Total Sprites</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Generations</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Storage Used</p>
                <p className="text-2xl font-bold">256 MB</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex gap-4">
          <Button variant="accent" size="lg">
            Save Project
          </Button>
          <Button variant="secondary" size="lg">
            Start New Project
          </Button>
        </div>
      </div>
    </Layout>
  );
};
