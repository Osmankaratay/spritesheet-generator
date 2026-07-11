import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';

export const AssetPlanningPage: React.FC = () => {
  const navigate = useNavigate();
  const { current: analysis } = useSelector((state: RootState) => state.analysis);
  const [sprites, setSprites] = useState(analysis?.results?.spritesheets || []);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setEditingId(editingId === id ? null : id);
  };

  const handleStartGeneration = () => {
    navigate('/generation');
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Asset Planning</h1>
          <p className="text-gray-600">Review and edit spritesheet specifications</p>
        </div>

        <div className="space-y-4">
          {sprites.map((sprite: any) => (
            <Card key={sprite.id}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{sprite.name}</h3>
                  <p className="text-gray-600">{sprite.purpose}</p>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleEdit(sprite.id)}
                >
                  {editingId === sprite.id ? 'Done' : 'Edit'}
                </Button>
              </div>

              {editingId === sprite.id ? (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Dimensions</label>
                    <input
                      type="text"
                      value={sprite.dimensions}
                      className="w-full border-2 border-gray-300 px-3 py-2 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Animation Type</label>
                    <select className="w-full border-2 border-gray-300 px-3 py-2 rounded">
                      <option>idle</option>
                      <option>run</option>
                      <option>fight</option>
                      <option>jump</option>
                      <option>attack</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Frame Count</label>
                    <input
                      type="number"
                      value={sprite.frameCount}
                      className="w-full border-2 border-gray-300 px-3 py-2 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Art Style</label>
                    <input
                      type="text"
                      value={sprite.artStyle}
                      className="w-full border-2 border-gray-300 px-3 py-2 rounded"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Dimensions</span>
                    <p className="font-medium">{sprite.dimensions}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Frames</span>
                    <p className="font-medium">{sprite.frameCount}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Animation</span>
                    <p className="font-medium">{sprite.animationTitle}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Style</span>
                    <p className="font-medium">{sprite.artStyle}</p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="border-t-2 border-gray-200 pt-8 flex gap-4">
          <Button variant="accent" size="lg" onClick={handleStartGeneration}>
            Approve & Start Generation
          </Button>
          <Button variant="secondary" size="lg">
            Save for Later
          </Button>
        </div>
      </div>
    </Layout>
  );
};
