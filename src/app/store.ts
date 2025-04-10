import { configureStore } from "@reduxjs/toolkit";
import themeReduser from '../components/header/theme/themeSlice';
import widthWindowReduser from '../utils/widthWindow/widthWindowSlice';
import locationReduser from "../components/header/location/locationSlice";
import likeCommentReduser from '../components/comments/likeSlice';
import authReduser from '../components/auth/authSlice';
import likeCountReduser from '../components/pokeList/likeCountSlice';
import favPokeReduser from "../pages/favorites/favPokeSlice/favPokeSlice";
import { jsonplaceholderApi } from '../api/jsonplaceholder/jsonplaceholderApi';
import { pokemonsApi } from "../api/pokemons/pokemonsApi"; 
import { weatherApi } from "../api/weather/weatherApi";
import { cityApi } from "../api/city/cityApi";

export const store = configureStore({
    reducer: {
        theme: themeReduser,
        widthWindow: widthWindowReduser,
        location: locationReduser,
        auth: authReduser,
        likeComment: likeCommentReduser,
        likeCount: likeCountReduser,
        favPoke: favPokeReduser,
        [pokemonsApi.reducerPath]: pokemonsApi.reducer,
        [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer,
        [weatherApi.reducerPath]: weatherApi.reducer,
        [cityApi.reducerPath]: cityApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([pokemonsApi.middleware, 
            jsonplaceholderApi.middleware, weatherApi.middleware,
            cityApi.middleware,    
        ]),
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;