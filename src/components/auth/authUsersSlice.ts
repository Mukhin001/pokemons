import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./authUserSlice";

const initialState: AuthState[] = [
    { id: 1, name: 'ivan', email: 'gg@mail.ru', password: '12345', gender: null, birthdate: null },
    { id: 2, name: 'petr', email: 'hh@yandex.ru', password: '54321', gender: null, birthdate: null },
    { id: 3, name: 'pavel', email: 'gamilll@gmail.com', password: '111', gender: null, birthdate: null },
];

const authUsers = createSlice({
    name: 'authUsers',
    initialState,
    reducers: {
        authCreate(state, action: PayloadAction<AuthState>) {
            const { id, name, email, password, gender, birthdate } = action.payload;
            return [
                ...state,
                    {
                        id: id,
                        name: name,
                        email: email,
                        password: password,
                        gender: gender,
                        birthdate: birthdate,
                    }
            ]
        },
    },
});

export const { authCreate } = authUsers.actions;
export default authUsers.reducer; 