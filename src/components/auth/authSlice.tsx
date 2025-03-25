import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    id: number;
    name: string;
    password: string;
};

const initialState: AuthState[] = [
    { id: 1, name: 'Ivan', password: '12345' },
];

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
});

export default authSlice.reducer; 