import { pokemonsApi } from "../pokemonsApi";

export interface PokemonsAll {
    name: string;
    url: string;
}; 

export interface DataApi {
    count: number;
    next: string;
    previous: null;
    results: PokemonsAll[];
};

export const pokemonsAll = pokemonsApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllPokemons: builder.query<DataApi, void>({
            query: () => '/api/v2/pokemon/?limit=50',
        }),
        getPokemon: builder.query({
            query: (name) => `/api/v2/pokemon/${name}`,
        }),
    }),
});

export const { useGetAllPokemonsQuery, useGetPokemonQuery } = pokemonsAll;