import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchHomePosts, fetchSubredditPosts, fetchSubredditAbout } from '../api/reddit-api';

export const loadHomePosts = createAsyncThunk(
    "app/loadHomePosts",
    async () => {
        return await fetchHomePosts();
    }
);

export const loadSubredditPosts = createAsyncThunk(
    "app/loadSubredditPosts",
    async (subreddit) => {
        return await fetchSubredditPosts(subreddit);
    }
);

export const loadSubredditAbout = createAsyncThunk(
    "app/loadSubredditAbout",
    async (subreddit) => {
        return await fetchSubredditAbout(subreddit);
    }
);

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        posts: [],
        about: [],
        isLoading: false,
    },
    extraReducers: {
        [loadHomePosts.pending]: (state, action) => {
            console.log('pending');
            state.isLoading = true;
            console.log(state.isLoading);
        },
        [loadHomePosts.fulfilled]: (state, action) => {
            console.log('fulfilled')
            state.posts = action.payload;
            state.isLoading = false;
            console.log(state.isLoading);
        },
        [loadHomePosts.rejected]: (state, action) => {
            console.log('rejected')
            state.isLoading = false;
        },
        [loadSubredditPosts.pending]: (state, action) => {
            console.log('pending')
            state.isLoading = true;
            console.log(state.isLoading);
        },
        [loadSubredditPosts.fulfilled]: (state, action) => {
            console.log('fulfilled')
            state.posts = action.payload;
            state.isLoading = false;
        },
        [loadSubredditPosts.rejected]: (state, action) => {
            console.log('rejected')
            state.isLoading = false;
        },
        [loadSubredditAbout.pending]: (state, action) => {
            console.log('pending')
            state.isLoading = true;
            console.log(state.isLoading);
        },
        [loadSubredditAbout.fulfilled]: (state, action) => {
            console.log('fulfilled');
            state.about = action.payload;
            state.isLoading = false;
        },
        [loadSubredditAbout.rejected]: (state, action) => {
            console.log('rejected')
            state.isLoading = false;
        },
    }
})

export const selectAbout = state => state.app.about;
export const selectPosts = state => state.app.posts;
export const selectIsLoading = state => state.app.isLoading;
export default appSlice.reducer;