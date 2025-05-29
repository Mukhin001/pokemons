import { useParams } from "react-router-dom";
import { useGetPokemonQuery } from "../../../api/pokemons/pokemonsAll/pokemonsAll";
import CardSlider from "./cardSlider/CardSlider";
import Loader from "../../loader/Loader";
import ErrorComponent from "../../error/ErrorComponent";
import PokeNav from "./pokeNav/PokeNav";
import PokeDetail from "./pokeDetail/PokeDetail";

const PokeCard = () => {
 
    const { name } = useParams();
    const { data: dataImg, isError, isLoading } = useGetPokemonQuery(name);
    const arrImg: string[] = [];
    
    if(dataImg) {
        const imgO =  dataImg?.sprites.front_default;
        const imgT =  dataImg?.sprites.back_default;
        const imgF =  dataImg?.sprites.front_shiny;
        const imgFif =  dataImg?.sprites.back_shiny;
        
        arrImg.push(imgO, imgT, imgF, imgFif);
    }

    if(isLoading) {
        return <Loader size='medium' />
    }

    if(isError) {
        return <ErrorComponent size="Large" />
    }

    return ( 
        <section>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <CardSlider arrImg={arrImg} name={name} id={dataImg?.id} />
                <PokeDetail name={name} />
            </div>
            <PokeNav  id={dataImg?.id} />
        </section>
     );
};
 
export default PokeCard;