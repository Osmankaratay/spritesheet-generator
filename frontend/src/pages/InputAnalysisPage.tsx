import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useNavigate } from 'react-router-dom';
import { analysisAPI } from '../services/api';
import { useDispatch } from 'react-redux';
import { setAnalysis } from '../store/slices/analysisSlice';

export const InputAnalysisPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [gddText, setGddText] = useState('');
  const [projectName, setProjectName] = useState('');
  const [loading, setLoading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [phaseStatus, setPhaseStatus] = useState<string>('');

  const handleAnalyze = async () => {
    if (!projectName || !gddText) return;

    setLoading(true);
    try {
      const res = await analysisAPI.create('temp-project-id', gddText);
      const analysisId = res.data.data.id;

      // Start polling for analysis status
      setAnalyzing(true);
      const pollStatus = async () => {
        try {
          const statusRes = await analysisAPI.getStatus(analysisId);
          const status = statusRes.data.data;
          setPhaseStatus(status.phase);
          dispatch(setAnalysis(status));

          if (status.phase === 'completed') {
            setAnalyzing(false);
            navigate(`/analysis/${analysisId}/planning`);
          } else {
            setTimeout(pollStatus, 2000);
          }
        } catch (error) {
          console.error('Failed to get status:', error);
        }
      };
      pollStatus();
    } catch (error) {
      console.error('Failed to start analysis:', error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Analyze Game Design Document</h1>
          <p className="text-gray-600">Upload your GDD to extract sprite requirements</p>
        </div>

        <div className="border-2 border-gray-200 rounded p-8 space-y-6">
          <Input
            label="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="My Game Project"
          />

          <div>
            <label className="font-medium text-gray-700 block mb-2">Game Design Document</label>
            <textarea
              value={gddText}
              onChange={(e) => setGddText(e.target.value)}
              placeholder="Paste your GDD text here..."
              className="w-full h-64 border-2 border-gray-300 px-3 py-2 rounded focus:border-accent focus:outline-none font-mono text-sm"
            />
          </div>

          {phaseStatus && analyzing && (
            <div className="bg-gray-100 p-4 rounded border-2 border-accent">
              <p className="font-medium mb-2">Analysis Progress: {phaseStatus}</p>
              <div className="w-full bg-gray-300 rounded h-2">
                <div className="bg-accent h-2 rounded" style={{ width: '33%' }}></div>
              </div>
            </div>
          )}

          <Button
            variant="accent"
            size="lg"
            onClick={handleAnalyze}
            loading={loading || analyzing}
            disabled={!projectName || !gddText}
            className="w-full"
          >
            {analyzing ? 'Analyzing...' : 'Analyze Document'}
          </Button>
        </div>
      </div>
    </Layout>
  );
};
