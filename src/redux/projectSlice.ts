import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Project {
  id: number;
  title: string;
  description: string;
  budget: number;
  category: string;
  type: string;
  hourlyRate?: number;
  skills: string[];
}

interface Filters {
  id: string;
  category: string;
  minBudget: string;
  maxBudget: string;
  projectType: string[];
  minHourlyRate: string;
  maxHourlyRate: string;
  skills: string[];
}

interface ProjectsState {
  projects: Project[];
  filteredProjects: Project[];
  filters: Filters;
  loading: boolean;
  error: string | null;
  searchQuery: string;
}

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
  const response = await fetch('/projects.json');
  const data = await response.json();
  return new Promise<Project[]>((resolve) => {
      setTimeout(() => {
          resolve(data);
      }, 2000); // 2 seconds delay
  });
});

const initialState: ProjectsState = {
  projects: [],
  filteredProjects: [],
  filters: {
    id: '',
    category: '',
    minBudget: '',
    maxBudget: '',
    projectType: [],
    minHourlyRate: '',
    maxHourlyRate: '',
    skills: [],
  },
  loading: false,
  error: null,
  searchQuery: '',
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<Filters>) {
      state.filters = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    filterProjects(state) {
      let filtered = state.projects;
      const { filters, searchQuery } = state;

      if (filters.id) {
        filtered = filtered.filter(project => project.id.toString().includes(filters.id));
      }
      if (filters.category) {
        filtered = filtered.filter(project =>
          project.category.toLowerCase().includes(filters.category.toLowerCase())
        );
      }
      if (filters.minBudget) {
        filtered = filtered.filter(project => project.budget >= parseInt(filters.minBudget));
      }
      if (filters.maxBudget) {
        filtered = filtered.filter(project => project.budget <= parseInt(filters.maxBudget));
      }
      if (filters.minHourlyRate) {
        filtered = filtered.filter(
          project => project.hourlyRate && project.hourlyRate >= parseInt(filters.minHourlyRate)
        );
      }
      if (filters.maxHourlyRate) {
        filtered = filtered.filter(
          project => project.hourlyRate && project.hourlyRate <= parseInt(filters.maxHourlyRate)
        );
      }
      if (filters.projectType.length > 0) {
        filtered = filtered.filter(project => filters.projectType.includes(project.type));
      }
      if (filters.skills.length > 0) {
        filtered = filtered.filter(project =>
          filters.skills.every(skill => project.skills.includes(skill))
        );
      }

      if (searchQuery) {
        filtered = filtered.filter(
          project =>
            project.title.toLowerCase().includes(searchQuery) ||
            project.description.toLowerCase().includes(searchQuery)
        );
      }

      state.filteredProjects = filtered;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
        state.filteredProjects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch projects';
      });
  },
});

export const { setFilters, setSearchQuery, filterProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
