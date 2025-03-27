import { useNavigate, useParams } from "react-router-dom";
import { items } from "../PokeList";
import st from './style.module.css';
import './pokecard.css';
import CommentsList from "../../comments/CommentsList";
import { useGetPokemonQuery } from "../../../api/pokemons/pokemonsAll/pokemonsAll";
import { useRef, useState } from "react";

interface PokeObj {
    id: number;
    name: string;
    imgUrl?: string;
    alt?: string;
    description?: string;
};

const PokeCard = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const { data: dataImg, isError, isLoading } = useGetPokemonQuery(name);
    const wrapImgRef = useRef<HTMLDivElement | null>(null);
    const currentImgRef = useRef<HTMLImageElement | null>(null);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    
    //const content: PokeObj | undefined  = items.find(obj => obj.name === name);
    const goBack = (): void | Promise<void>  => navigate(-1);
    const htmlCollectionImages = wrapImgRef.current?.children as HTMLCollection;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
       
        if(currentSlide >= [...htmlCollectionImages].length -1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }

        [...htmlCollectionImages].forEach((e, i) => {
            e.classList.remove('activeSlide');
            
            if(i === currentSlide) {
                e.classList.add('activeSlide');
                currentImgRef.current.src = e.src;
            }
        })
           
    };

    return ( 
        <section>
            <button onClick={goBack}>Go back!</button>
            <div>
                <img ref={currentImgRef} src={dataImg?.sprites.front_default} alt="" />
            </div>
            <div>
                <button onClick={() => ''}>{'<'}</button>
                    <div ref={wrapImgRef} className={st.wrapImg}>
                        <img className='activeSlide' src={dataImg?.sprites.front_default} alt={dataImg?.name} />
                        <img src={dataImg?.sprites.back_default} alt={dataImg?.name} />
                        <img src={dataImg?.sprites.front_shiny} alt={dataImg?.name} />
                        <img src={dataImg?.sprites.back_shiny} alt={dataImg?.name} />
                    </div>
                <button onClick={handleClick}>{'>'}</button>            
            </div>
            <h3>{dataImg?.name}</h3>
            <CommentsList id={dataImg?.id}/>
        </section>
     );
};
 
export default PokeCard;