import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnalysisStatus {
  phase: 'segmentation' | 'subdivision' | 'extraction' | 'completed';
  progress: number;
  results: any;
  error: string | null;
}

interface AnalysisState {
  current: AnalysisStatus | null;
  loading: boolean;
}

const initialState: AnalysisState = {
  current: null,
  loading: false
};

const analysisSlice = createSlice({
  name: 'analysis',
  initialState,
  reducers: {
    setAnalysis: (state, action: PayloadAction<AnalysisStatus>) => {
      state.current = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
});

export const { setAnalysis, setLoading } = analysisSlice.actions;
export default analysisSlice.reducer;
