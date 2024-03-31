'use client';
import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './news/newsSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    news: newsSlice,
  },

  devTools: true,
});

type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
