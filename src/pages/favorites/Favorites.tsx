import { Link } from "react-router-dom";
import { useGetAllPokemonsQuery } from "../../api/pokemons/pokemonsAll/pokemonsAll";
import { useAppSelector } from "../../app/hooks";
import Btn from "../../components/button/Btn";
import ErrorComponent from "../../components/error/ErrorComponent";
import Loader from "../../components/loader/Loader";
import PokeList from "../../components/pokeList/PokeList";
import st from './favorites.module.css';

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
                <div className={st.containerFavEmpty}>
                    <div className={st.wrapImg}>
                        <img src='/icon_btn/like_grey.svg' alt="" />
                    </div>
                    <h3>Epmty favorit</h3> 
                    <Link to='/pokemons'>
                        <Btn content="Back To Pokemons" />
                    </Link>
                </div>
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