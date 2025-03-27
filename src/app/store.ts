import { configureStore } from "@reduxjs/toolkit";
import themeReduser from '../components/header/theme/themeSlice';
import widthWindowReduser from '../utils/widthWindow/widthWindowSlice';
import modalReduser from '../components/modal/modalSlice';
import likeCommentReduser from '../components/comments/likeSlice';
import authReduser from '../components/auth/authSlice';
import likeCountState from '../components/pokeList/likeCountSlice';
import { jsonplaceholderApi } from '../api/jsonplaceholder/jsonplaceholderApi';
import { pokemonsApi } from "../api/pokemons/pokemonsApi"; 

export const store = configureStore({
    reducer: {
        theme: themeReduser,
        widthWindow: widthWindowReduser,
        auth: authReduser,
        modal: modalReduser,
        likeComment: likeCommentReduser,
        likeCount: likeCountState,
        [pokemonsApi.reducerPath]: pokemonsApi.reducer,
        [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([pokemonsApi.middleware, jsonplaceholderApi.middleware]),
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;