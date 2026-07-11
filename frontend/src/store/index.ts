import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import projectReducer from './slices/projectSlice';
import spriteReducer from './slices/spriteSlice';
import analysisReducer from './slices/analysisSlice';
import generationReducer from './slices/generationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectReducer,
    sprites: spriteReducer,
    analysis: analysisReducer,
    generation: generationReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
