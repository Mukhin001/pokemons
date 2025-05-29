import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const  cityApi = createApi({
    reducerPath: 'cityApi',
    baseQuery: fetchBaseQuery({ baseUrl: ''}),
    endpoints: (builder) => ({
        getCity: builder.query<any, {lat: any, lon: any}>({
            query: ({lat, lon}) => `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`,
        }),
    }),  
});

export const { useGetCityQuery } = cityApi;