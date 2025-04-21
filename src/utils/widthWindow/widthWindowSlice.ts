import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppRootState } from "../../app/store";

export type Width = true | false; 

interface WidthWindowState {
    width: Width;
};

const initialState: WidthWindowState = {
    width: true,
};

export const widthWindowSlice = createSlice({
    name: 'widthWindow',
    initialState,
    reducers: {
        setWidthWindow(_, action: PayloadAction<Width>) {
            const widthBoolean = action.payload;
            return { width: widthBoolean };
        },
    },
});

export const { setWidthWindow } = widthWindowSlice.actions;

export const selectWidth = (state: AppRootState) => state.widthWindow.width;

export default widthWindowSlice.reducer;