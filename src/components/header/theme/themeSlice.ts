import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
    value: string | null;
};

if(localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'light');
}

const initialState: ThemeState = {
    value: localStorage.getItem('theme'),
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheTheme: (state, action: PayloadAction<string>) => {
            return { value: action.payload }
        },
    },
});

export const { changeTheTheme } = themeSlice.actions;
export default themeSlice.reducer;