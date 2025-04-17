import { configureStore } from "@reduxjs/toolkit";
import themeReduser from '../components/header/theme/themeSlice';
import widthWindowReduser from '../utils/widthWindow/widthWindowSlice';
import locationReduser from "../components/header/getLocation/locationSlice";
import userAgentReduser from "../components/header/getLocation/userAgentSlice";
import authUserReduser from '../components/auth/authUserSlice';
import authUsersReduser from '../components/auth/authUsersSlice';
import likeCommentReduser from '../components/comments/likeSlice';
import favPokeReduser from "../pages/favorites/favPokeSlice/favPokeSlice";
import postsReduser from '../pages/posts/postsSlice';
import { jsonplaceholderApi } from '../api/jsonplaceholder/jsonplaceholderApi';
import { pokemonsApi } from "../api/pokemons/pokemonsApi"; 
import { weatherApi } from "../api/weather/weatherApi";
import { cityApi } from "../api/city/cityApi";

export const store = configureStore({
    reducer: {
        theme: themeReduser,
        widthWindow: widthWindowReduser,
        location: locationReduser,
        userAgent: userAgentReduser,
        authUser: authUserReduser,
        authUsers: authUsersReduser,
        likeComment: likeCommentReduser,
        favPoke: favPokeReduser,
        posts: postsReduser,
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