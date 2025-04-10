import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = [];

export const favPokeSlice = createSlice({
    name: 'favPokeSlice',
    initialState,
    reducers: {
        addPokeFav: (state, action: PayloadAction<string>) => {
            const poke = action.payload;
            if(!state.includes(poke)) {
                state.push(poke);
            } else {
                state.forEach((e, i) => {
                    if(e === poke) {
                        state.splice(i, 1)
                    }
                })
            }
        },
    },
});

export const { addPokeFav } = favPokeSlice.actions;
export default favPokeSlice.reducer;