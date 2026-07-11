import React from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const SpriteEditPage: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold">Edit Sprite</h1>

        <div className="grid grid-cols-4 gap-8">
          {/* Sprite Selection */}
          <div>
            <h2 className="font-bold mb-4">Sprites</h2>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border-2 border-gray-200 p-3 rounded cursor-pointer hover:border-accent transition-colors"
                >
                  <p className="text-sm font-medium">Sprite {i}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Canvas */}
          <div className="col-span-2">
            <div className="border-2 border-gray-200 rounded p-8 bg-gray-50 flex items-center justify-center h-96">
              <span className="text-gray-400">Sprite preview</span>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h2 className="font-bold mb-4">Tools</h2>
            <div className="space-y-2">
              <Button variant="secondary" className="w-full text-sm">
                Delete Background
              </Button>
              <Button variant="secondary" className="w-full text-sm">
                Undo
              </Button>
              <Button variant="secondary" className="w-full text-sm">
                Redo
              </Button>
            </div>

            <div className="mt-6">
              <h3 className="font-bold mb-4">Properties</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <input type="text" className="w-full border-2 border-gray-300 px-2 py-1 rounded text-sm" />
                </div>
                <div>
                  <label className="text-sm font-medium">Dimensions</label>
                  <input type="text" className="w-full border-2 border-gray-300 px-2 py-1 rounded text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button variant="accent">Save Changes</Button>
          <Button variant="secondary">Cancel</Button>
        </div>
      </div>
    </Layout>
  );
};
