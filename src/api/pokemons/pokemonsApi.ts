import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonsApi = createApi({
    reducerPath: 'pokemonsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co'}),
    tagTypes: ['Pokemon'],
    endpoints: () => ({}),
});

