import { useGetAllPokemonsQuery } from "../../api/pokemons/pokemonsAll/pokemonsAll";
import { useAppSelector } from "../../app/hooks";
import ErrorComponent from "../../components/error/ErrorComponent";
import Loader from "../../components/loader/Loader";
import PokeList from "../../components/pokeList/PokeList";

const Favorites = () => {
    const pokeFav = useAppSelector(state => state.favPoke);

    const { data, isLoading, isError } = useGetAllPokemonsQuery();
    let pokemons = data?.results.filter(el => pokeFav.includes(el.name));
 
    if(isLoading) {
        return <Loader />
    }

    if(isError) {
        return <ErrorComponent size="Large" />
    }

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
        </main>
     );
};
 
export default Favorites;