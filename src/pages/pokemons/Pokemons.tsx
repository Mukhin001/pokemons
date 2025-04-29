import { useGetAllPokemonsQuery } from "../../api/pokemons/pokemonsAll/pokemonsAll";
import PokeList from "../../components/pokeList/PokeList";

const Pokemons = () => {
    const { data, isError, isLoading } = useGetAllPokemonsQuery();
    const pokemons = data?.results.slice();

    return ( 
        <main>
            <h3>Pokemons</h3>
            <PokeList pokemons={pokemons} isError={isError} isLoading={isLoading}/>
        </main>
     );
};
 
export default Pokemons;