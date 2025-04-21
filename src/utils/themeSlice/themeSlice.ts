import { createSlice } from "@reduxjs/toolkit";
import { AppRootState } from "../../app/store";

export type Theme = 'light' | 'dark';

interface ThemeState {
    currentTheme: Theme;
};

const initialState: ThemeState = {
    currentTheme: 'dark',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export const selectCurrentTheme = (state: AppRootState) => state.theme.currentTheme;

export default themeSlice.reducer;

export type { ThemeState };