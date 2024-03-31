'use client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../utils/baseUrl';
import type NewsItem from '../../types/NewsItem';
import type language_id from '../../types/Language';
import NewsState from '../../types/NewsState';

const initialState: NewsState = {
  list: [],
  related: [],
  isLoader: false,
};

export const getNews = createAsyncThunk<NewsItem[], language_id>(
  'news/getNews',
  async ({ language_id }) => {
    const res = await axios(`${BASE_URL}&language_id=${language_id}`);
    return res.data.news;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getRelatedNews: (state, { payload }) => {
      const list = state.list.filter((news) => news.id === payload);
      state.related = list;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.isLoader = false;
      })
      .addCase(getNews.rejected, (state) => {
        state.isLoader = false;
      });
  },
});

export const { getRelatedNews } = newsSlice.actions;
export default newsSlice.reducer;
