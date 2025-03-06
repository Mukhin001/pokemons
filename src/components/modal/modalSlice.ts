import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    value: boolean;
};

const initialState: ModalState = {
    value: false,
};

export const modalSlice = createSlice({
    name: 'madal',
    initialState,
    reducers: {
        openCloseModal: (state, action: PayloadAction<boolean>) => {
            return { value: action.payload }
        },
    },
});

export const { openCloseModal } = modalSlice.actions;
export default modalSlice.reducer;