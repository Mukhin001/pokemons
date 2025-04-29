import { useGetAllPokemonsQuery } from "../../api/pokemons/pokemonsAll/pokemonsAll";
import InfiniteCarousel from "./InfiniteCarousel";
import { useAppSelector } from "../../app/hooks";
import PokeList from "../../components/pokeList/PokeList";

const Favorites = () => {
    const pokeFav = useAppSelector(state => state.favPoke);

    const { data, isLoading, isError } = useGetAllPokemonsQuery();
    let pokemons = data?.results.filter(el => pokeFav.includes(el.name))

    return ( 
        <main>
            {pokeFav.length === 0 ? 
                <h3>Epmty favorit</h3> 
                : 
                <div>
                    <h3>Favorites {pokeFav.length}</h3>
                    <PokeList pokemons={pokemons} isError={isError} isLoading={isLoading} />
                </div>
            }
            <InfiniteCarousel />
        </main>
     );
};
 
export default Favorites;