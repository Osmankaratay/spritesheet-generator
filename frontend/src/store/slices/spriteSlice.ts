import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Sprite {
  id: string;
  name: string;
  dimensions: string;
  frameCount: number;
  status: 'pending' | 'generated' | 'accepted';
}

interface SpriteState {
  items: Sprite[];
  loading: boolean;
  error: string | null;
}

const initialState: SpriteState = {
  items: [],
  loading: false,
  error: null
};

const spriteSlice = createSlice({
  name: 'sprites',
  initialState,
  reducers: {
    setSprites: (state, action: PayloadAction<Sprite[]>) => {
      state.items = action.payload;
    },
    addSprite: (state, action: PayloadAction<Sprite>) => {
      state.items.push(action.payload);
    },
    updateSprite: (state, action: PayloadAction<Sprite>) => {
      const index = state.items.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const { setSprites, addSprite, updateSprite, setLoading, setError } = spriteSlice.actions;
export default spriteSlice.reducer;
