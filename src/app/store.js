import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import themeReducer from '../features/Theme/themeSlice';
import searchReducer from '../features/Search/searchSlice';
import filtersReducer from '../features/Filters/filtersSlice';
import subredditsReducer from '../features/Subreddits/subredditsSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    theme: themeReducer,
    search: searchReducer,
    filters: filtersReducer,
    subreddits: subredditsReducer,
  },
});