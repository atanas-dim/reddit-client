import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        posts: [
            'post1',
            'post2',
            'post3'
        ],
    },
    reducers: {
        // setIsMobile: (state, action) => {
        //     state.isMobile = action.payload;
        //     console.log('mobile is ' + state.isMobile)
        // },
    }
})

export const selectPosts = state => state.app.posts;
// export const { setIsMobile } = appSlice.actions;
export default appSlice.reducer;