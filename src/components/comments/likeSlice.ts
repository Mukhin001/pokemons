import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LikeState {
    id: number;
    value: number;
};

const initialState: LikeState[] = [
];

for(let i = 1; i <= 100; i++) {
    initialState.push({ id: i, value: 0,})
};

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const newState = state.map(obj => (obj.id === id) ? 
                {id: id, value: obj.value + 1}  : obj);

            return newState;
        },
    },
});

export const { increment } = likeSlice.actions;
export default likeSlice.reducer;