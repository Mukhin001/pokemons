import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WidthWindowState {
    width: boolean;
};

const initialState: WidthWindowState = {
    width: window.innerWidth > 500,
};

export const widthWindowSlice = createSlice({
    name: 'widthWindow',
    initialState,
    reducers: {
        setWidthWindow: (state, action: PayloadAction<boolean>) => {
            const widthBoolean = action.payload;
            return { width: widthBoolean };
        },
    },
});

export const { setWidthWindow } = widthWindowSlice.actions;
export default widthWindowSlice.reducer;