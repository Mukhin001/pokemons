import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LikeState {
    id: number;
    value: number;
    likeClick: boolean;
};

const initialState: LikeState[] = [
];

for(let i = 1; i <= 250; i++) {
    initialState.push({ id: i, value: 0, likeClick: false})
};

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<LikeState>) => {
            const {id, value, likeClick} = action.payload;
            const exidingLike = state.find(like => like.id === id);
            if(exidingLike) {
                exidingLike.value = value + 1;
                exidingLike.likeClick = likeClick;
            } 
        },
    },
});

export const { increment } = likeSlice.actions;
export default likeSlice.reducer;