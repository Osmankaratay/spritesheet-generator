import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GenerationStatus {
  id: string;
  status: 'processing' | 'completed' | 'paused';
  progress: number;
  queue: any[];
  fullAutoMode: boolean;
}

interface GenerationState {
  current: GenerationStatus | null;
  loading: boolean;
}

const initialState: GenerationState = {
  current: null,
  loading: false
};

const generationSlice = createSlice({
  name: 'generation',
  initialState,
  reducers: {
    setGeneration: (state, action: PayloadAction<GenerationStatus>) => {
      state.current = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updateQueue: (state, action: PayloadAction<any[]>) => {
      if (state.current) {
        state.current.queue = action.payload;
      }
    }
  }
});

export const { setGeneration, setLoading, updateQueue } = generationSlice.actions;
export default generationSlice.reducer;
