import { useGetAllPokemonsQuery } from "../../api/pokemons/pokemonsAll/pokemonsAll";
import PokeList from "../../components/pokeList/PokeList";

const Pokemons = () => {
    const { data, isError, isLoading } = useGetAllPokemonsQuery();
    const dataSort = data?.results.slice();
    
    return ( 
        <main>
            <h3>Pokemons</h3>
            <PokeList dataSort={dataSort} isError={isError} isLoading={isLoading}/>
        </main>
     );
};
 
export default Pokemons;