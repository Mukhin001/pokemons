// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface ThemeState {
//     value: string | null;
// };

// const initialState: ThemeState = {
//     value: '',
// };

// try {
//     if(localStorage.getItem('theme') === null) {
//         localStorage.setItem('theme', 'light');
//     }
//     initialState.value = localStorage.getItem('theme');
// } catch(err) {
//     initialState.value = 'dark';
// }

// export const themeSlice = createSlice({
//     name: 'theme',
//     initialState,
//     reducers: {
//         changeTheTheme: (state, action: PayloadAction<string>) => {
//             return { value: action.payload }
//         },
//     },
// });

// export const { changeTheTheme } = themeSlice.actions;
// export default themeSlice.reducer;