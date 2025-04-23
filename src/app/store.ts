import { configureStore, Middleware } from "@reduxjs/toolkit";
import themeReduser from '../utils/themeSlice/themeSlice';
import widthWindowReduser from '../utils/widthWindow/widthWindowSlice';
import locationReduser from "../components/header/getLocation/locationSlice";
import userAgentReduser from '../components/header/getLocation/userAgentSlice';
import authUserReduser from '../components/auth/authUserSlice';
import authUsersReduser from '../components/auth/authUsersSlice';
import likeCommentReduser from '../components/comments/likeSlice';
import favPokeReduser from "../pages/favorites/favPokeSlice/favPokeSlice";
import postsReduser from '../pages/posts/postsSlice';
import { jsonplaceholderApi } from '../api/jsonplaceholder/jsonplaceholderApi';
import { pokemonsApi } from "../api/pokemons/pokemonsApi"; 
import { weatherApi } from "../api/weather/weatherApi";
import { cityApi } from "../api/city/cityApi";
import { loadTheme } from "../utils/themeSlice/localStorage";
import { innerWidthWindow } from "../utils/widthWindow/innerWidth";

const allApis = [pokemonsApi, jsonplaceholderApi, weatherApi, cityApi];
const middlewareList: Middleware[] = allApis.map(api => api.middleware);

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
        // [pokemonsApi.reducerPath]: pokemonsApi.reducer,
        // [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer,
        // [weatherApi.reducerPath]: weatherApi.reducer,
        // [cityApi.reducerPath]: cityApi.reducer,
        ...Object.fromEntries(
            allApis.map(api => [api.reducerPath, api.reducer])
        ),
    },
    // middleware: (getDefaultMiddleware) => 
    //     getDefaultMiddleware().concat(...[pokemonsApi.middleware, 
    //         jsonplaceholderApi.middleware, weatherApi.middleware,
    //         cityApi.middleware,    
    //     ]),
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(
    //         ...allApis.map(api => api.middleware)
    //     ),
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(...middlewareList),
    preloadedState: {
        theme: {
            currentTheme: loadTheme(),
        },
        widthWindow: {
            width: innerWidthWindow(),
        },
    },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;