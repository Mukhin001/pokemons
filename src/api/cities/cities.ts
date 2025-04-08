import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const key = 'OTDdEOVKLppsxUYXWV9CnAdkGRIhpbbc';

export const  citiesApi = createApi({
    reducerPath: 'citiesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://geohelper.info/api/v1'}),
    endpoints: (builder) => ({
        getCities: builder.query({
            query: () => `/countries?apiKey=${key}`,
        }),
    }),
});

export const { useGetCitiesQuery } = citiesApi;