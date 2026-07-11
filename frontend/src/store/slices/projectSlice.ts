import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'generating' | 'completed';
  createdAt: string;
}

interface ProjectState {
  items: Project[];
  current: Project | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProjectState = {
  items: [],
  current: null,
  loading: false,
  error: null
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.items = action.payload;
    },
    setCurrentProject: (state, action: PayloadAction<Project>) => {
      state.current = action.payload;
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.items.push(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const { setProjects, setCurrentProject, addProject, setLoading, setError } = projectSlice.actions;
export default projectSlice.reducer;
