import { configureStore } from "@reduxjs/toolkit";
import themeReduser from '../components/header/theme/themeSlice';
import widthWindowReduser from '../utils/widthWindow/widthWindowSlice';
import likeCommentReduser from '../components/comments/likeSlice';
import authReduser from '../components/auth/authSlice';
import likeCountState from '../components/pokeList/likeCountSlice';
import { jsonplaceholderApi } from '../api/jsonplaceholder/jsonplaceholderApi';
import { pokemonsApi } from "../api/pokemons/pokemonsApi"; 
import { weatherApi } from "../api/weather/weatherApi";
import { citiesApi } from "../api/cities/cities";

export const store = configureStore({
    reducer: {
        theme: themeReduser,
        widthWindow: widthWindowReduser,
        auth: authReduser,
        likeComment: likeCommentReduser,
        likeCount: likeCountState,
        [pokemonsApi.reducerPath]: pokemonsApi.reducer,
        [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer,
        [weatherApi.reducerPath]: weatherApi.reducer,
        [citiesApi.reducerPath]: citiesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([pokemonsApi.middleware, 
            jsonplaceholderApi.middleware, weatherApi.middleware,
            citiesApi.middleware,    
        ]),
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;