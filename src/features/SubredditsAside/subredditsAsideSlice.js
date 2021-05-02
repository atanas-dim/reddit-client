import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSubredditNames } from '../../api/reddit-api';

export const loadSubredditNames = createAsyncThunk(
    "subreddits/loadSubredditsNames",
    async () => {
        return await fetchSubredditNames();
    }
);

export const subredditsAsideSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subredditNames: [],
        isOpen: false,
        currentSubreddit: '/',
    },
    reducers: {
        setIsOpen: (state, action) => {
            state.isOpen = action.payload;
            console.log("open is " + state.isOpen);
        },
        setCurrentSubreddit: (state, action) => {
            state.currentSubreddit = action.payload;
            console.log('current subreddit is ' + state.currentSubreddit);
        },
    },
    extraReducers: {
        [loadSubredditNames.pending]: (state, action) => {
            // console.log('pending')
        },
        [loadSubredditNames.fulfilled]: (state, action) => {
            // console.log('fulfilled')
            state.subredditNames = action.payload;
            // console.log(state.subreddits.filter(s => s !== 'r/Home'));
        },
        [loadSubredditNames.rejected]: (state, action) => {
            // console.log('rejected')
        },
    }
})

export const selectIsOpen = state => state.subredditsAside.isOpen;
export const selectCurrentSubreddit = state => state.subredditsAside.currentSubreddit;
export const selectSubredditNames = state => state.subredditsAside.subredditNames;
export const { setIsOpen, setCurrentSubreddit } = subredditsAsideSlice.actions;
export default subredditsAsideSlice.reducer;