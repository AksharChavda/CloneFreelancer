// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectSlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
