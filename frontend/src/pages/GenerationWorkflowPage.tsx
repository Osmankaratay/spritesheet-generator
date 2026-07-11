import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { generationAPI } from '../services/api';
import { setGeneration, updateQueue } from '../store/slices/generationSlice';
import { useNavigate } from 'react-router-dom';

export const GenerationWorkflowPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { current: generation } = useSelector((state: RootState) => state.generation);
  const [fullAutoMode, setFullAutoMode] = useState(generation?.fullAutoMode || false);
  const [polling, setPolling] = useState(false);

  useEffect(() => {
    if (!generation) return;

    setPolling(true);
    const interval = setInterval(async () => {
      try {
        const res = await generationAPI.getStatus(generation.id);
        dispatch(setGeneration(res.data.data));
      } catch (error) {
        console.error('Failed to get generation status:', error);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [generation?.id, dispatch]);

  const handleToggleFullAuto = async () => {
    if (!generation) return;
    try {
      await generationAPI.toggleFullAutoMode(generation.id, !fullAutoMode);
      setFullAutoMode(!fullAutoMode);
    } catch (error) {
      console.error('Failed to toggle full-auto mode:', error);
    }
  };

  const handleAccept = async (spriteId: string) => {
    if (!generation) return;
    try {
      await generationAPI.accept(generation.id, spriteId);
    } catch (error) {
      console.error('Failed to accept sprite:', error);
    }
  };

  if (!generation) {
    return (
      <Layout>
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">No generation in progress</p>
          <Button variant="accent" onClick={() => navigate('/projects')}>
            Go to Projects
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Generation Workflow</h1>
          <div className="flex items-center gap-4 border-2 border-gray-200 px-4 py-2 rounded">
            <span className="text-sm font-medium">Full-Auto Mode</span>
            <input
              type="checkbox"
              checked={fullAutoMode}
              onChange={handleToggleFullAuto}
              className="w-5 h-5"
            />
          </div>
        </div>

        {/* Progress */}
        <Card>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Progress</span>
                <span className="text-sm text-gray-600">{generation.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded h-3">
                <div
                  className="bg-accent h-3 rounded transition-all"
                  style={{ width: `${generation.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </Card>

        {/* Queue */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Asset Queue</h2>
          <div className="space-y-3">
            {generation.queue.map((item: any, idx: number) => (
              <div key={idx} className="border-2 border-gray-200 rounded p-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      item.status === 'pending'
                        ? 'bg-gray-400'
                        : item.status === 'generated'
                        ? 'bg-yellow-400'
                        : 'bg-green-500'
                    }`}
                  ></div>
                  <span className="font-medium">{item.name || `Sprite ${idx + 1}`}</span>
                  <span className="text-sm text-gray-500 capitalize">{item.status}</span>
                </div>
                {item.status === 'generated' && (
                  <Button
                    variant="accent"
                    size="sm"
                    onClick={() => handleAccept(item.spriteId)}
                  >
                    Accept
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-4">
          <Button variant="secondary">Pause</Button>
          <Button variant="secondary">Regenerate</Button>
          <Button variant="accent" onClick={() => navigate('/download')}>
            Download Assets
          </Button>
        </div>
      </div>
    </Layout>
  );
};
