import { createSlice } from "@reduxjs/toolkit";

interface LikeCount {
    value: number;
};

const initialState: LikeCount = {
    value: 0,
};

const likeCountSlice = createSlice({
    name: 'likeCount',
    initialState,
    reducers: {
        incrementLike: (state) => {
            state.value += 1;
        },
        decrementLike: (state) => {
            state.value -= 1;
        },
    },
});

export const { incrementLike, decrementLike } = likeCountSlice.actions;
export default likeCountSlice.reducer;