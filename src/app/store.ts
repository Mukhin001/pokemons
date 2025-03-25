import { configureStore } from "@reduxjs/toolkit";
import themeReduser from '../components/header/theme/themeSlice';
import widthWindowReduser from '../utils/widthWindow/widthWindowSlice';
import modalReduser from '../components/modal/modalSlice';
import likeReduser from '../components/comments/likeSlice';
import authReduser from '../components/auth/authSlice';
import { jsonplaceholderApi } from '../api/jsonplaceholder/jsonplaceholderApi';

export const store = configureStore({
    reducer: {
        theme: themeReduser,
        widthWindow: widthWindowReduser,
        auth: authReduser,
        modal: modalReduser,
        like: likeReduser,
        [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(jsonplaceholderApi.middleware),
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;