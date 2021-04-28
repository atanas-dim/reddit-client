import { createSlice } from '@reduxjs/toolkit';

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        mainCategories: [
            'home',
            'subreddits'
        ],
        subreddits: [
            'subreddit1',
            'subreddit2',
            'subreddit3',
            'subreddit4',
            'subreddit5',
        ],
        currentSubreddit: 'home',
        isOpen: true,
    },
    reducers: {
        setCurrentSubreddit: (state, action) => {
            state.currentSubreddit = action.payload;
            console.log(state.currentSubreddit);
        },
        setIsOpen: (state, action) => {
            state.isOpen = action.payload;
            console.log("open is " + state.isOpen);
        },
    }
})

export const selectIsOpen = state => state.subreddits.isOpen;
export const selectMainCategories = state => state.subreddits.mainCategories;
export const selectSubreddits = state => state.subreddits.subreddits;
export const selectCurrentSubreddit = state => state.subreddits.currentSubreddit;
export const { setCurrentSubreddit, setIsOpen} = subredditsSlice.actions;
export default subredditsSlice.reducer;