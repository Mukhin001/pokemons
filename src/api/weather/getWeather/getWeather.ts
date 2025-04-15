import { weatherApi } from "../weatherApi";

const key = '424138bd1df061d0694b6ebce42f3ff7';

export const getWeather = weatherApi.injectEndpoints({
    endpoints: (builder) => ({
        getWeatherCity: builder.query({
            query: (city) => `/data/2.5/weather?q=${city}&appid=${key}`,
        }),
    }),
});

export const { useGetWeatherCityQuery, useLazyGetWeatherCityQuery } = getWeather;