import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    gender: string | null;
    birthdate: string | null;
};

const initialState: AuthState = { id: null, name: null, email: null, password: null, gender: null, birthdate: null };

const authUser = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        userEnter(_, action: PayloadAction<AuthState>) {
            return action.payload;
        },
        userExit() {
            return { id: null, name: null, email: null, password: null, gender: null, birthdate: null }
        },
        updateUser(_, action: PayloadAction<AuthState>) {
            return action.payload;
        },
    },
});

export const { userEnter, userExit, updateUser } = authUser.actions;
export default authUser.reducer; 