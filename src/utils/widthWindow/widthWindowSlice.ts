import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WidthWindowState {
    width: boolean;
};

const initialState: WidthWindowState = {
    width: window.innerWidth > 1100,
};

export const widthWindowSlice = createSlice({
    name: 'widthWindow',
    initialState,
    reducers: {
        setWidthWindow: (_, action: PayloadAction<boolean>) => {
            const widthBoolean = action.payload;
            return { width: widthBoolean };
        },
    },
});

export const { setWidthWindow } = widthWindowSlice.actions;
export default widthWindowSlice.reducer;