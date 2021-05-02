import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSubreddits } from '../../api/reddit-api';

export const loadSubreddits = createAsyncThunk(
    "subreddits/loadSubreddits",
    async () => {
        return await fetchSubreddits();
    }
);

export const subredditsAsideSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isOpen: false,
        currentSubreddit: 'home',
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
        [loadSubreddits.pending]: (state, action) => {
            // console.log('pending')
        },
        [loadSubreddits.fulfilled]: (state, action) => {
            // console.log('fulfilled')
            state.subreddits = action.payload;
            // console.log(state.subreddits.filter(s => s !== 'r/Home'));
        },
        [loadSubreddits.rejected]: (state, action) => {
            // console.log('rejected')
        },
    }
})

export const selectIsOpen = state => state.subredditsAside.isOpen;
export const selectCurrentSubreddit = state => state.subredditsAside.currentSubreddit;
export const selectSubreddits = state => state.subredditsAside.subreddits;
export const { setIsOpen, setCurrentSubreddit } = subredditsAsideSlice.actions;
export default subredditsAsideSlice.reducer;