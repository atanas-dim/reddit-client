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
    },
    extraReducers: {
        [loadHomePosts.pending]: (state, action) => {
            console.log('pending')
        },
        [loadHomePosts.fulfilled]: (state, action) => {
            console.log('fulfilled')
            state.posts = action.payload;
        },
        [loadHomePosts.rejected]: (state, action) => {
            console.log('rejected')
        },
        [loadSubredditPosts.pending]: (state, action) => {
            console.log('pending')
        },
        [loadSubredditPosts.fulfilled]: (state, action) => {
            console.log('fulfilled')
            state.posts = action.payload;
        },
        [loadSubredditPosts.rejected]: (state, action) => {
            console.log('rejected')
        },
        [loadSubredditAbout.pending]: (state, action) => {
            console.log('pending')
        },
        [loadSubredditAbout.fulfilled]: (state, action) => {
            console.log('fulfilled');
            state.about = action.payload;
        },
        [loadSubredditAbout.rejected]: (state, action) => {
            console.log('rejected')
        },
    }
})

export const selectAbout = state => state.app.about;
export const selectPosts = state => state.app.posts;
export default appSlice.reducer;