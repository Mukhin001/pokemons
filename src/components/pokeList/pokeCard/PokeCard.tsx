import { useParams } from "react-router-dom";
import CommentsList from "../../comments/CommentsList";
import { useGetPokemonQuery } from "../../../api/pokemons/pokemonsAll/pokemonsAll";
import CardSlider from "./cardSlider/CardSlider";
import Loader from "../../loader/Loader";

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
            return <Loader />
        }

    return ( 
        <section>
            <CardSlider arrImg={arrImg} name={name} id={dataImg?.id} />
            <CommentsList id={dataImg?.id} />
        </section>
     );
};
 
export default PokeCard;