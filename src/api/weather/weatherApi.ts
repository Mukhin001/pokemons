import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const key = '424138bd1df061d0694b6ebce42f3ff7';

export const  weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://api.openweathermap.org'}),
    endpoints: (builder) => ({
        getWeather: builder.query({
            query: (city) => `/data/2.5/weather?q=${city}&appid=${key}`,
        }),
    }),
});

export const { useGetWeatherQuery } = weatherApi;