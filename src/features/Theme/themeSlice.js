import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'light',
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme === 'light' ? state.theme = 'dark' : state.theme = 'light';
        }
    }
})

export const selectTheme = state => state.theme.theme;
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;