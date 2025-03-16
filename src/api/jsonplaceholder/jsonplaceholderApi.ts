import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonplaceholderApi = createApi({
    reducerPath: 'typiCodeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: () => ({}),
});