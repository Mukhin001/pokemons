import { ReactNode, useState } from "react";
import st from './style.module.css';
import { Link } from "react-router-dom";
import Select from "../select/Select";
import TooltipBadge from "./tooltipBadge/TooltipBadge";
import { useGetAllPokemonsQuery  } from "../../api/pokemons/pokemonsAll/pokemonsAll";

export interface Pokemon {
    id: number;
    name: string;
    imgUrl: string;
    alt: string;
    description: string;
};

export const items = [
    { id: 1, name: 'belka', imgUrl: 'img-test-slider/belka.jpg', alt: 'Slide 1', description: 'Description for Slide 1' },
    { id: 2, name: 'fox', imgUrl: 'img-test-slider/fox.jpg', alt: 'Slide 2', description: 'Description for Slide 2' },
    { id: 3, name: 'kroll', imgUrl: 'img-test-slider/kroll.jpg', alt: 'Slide 3', description: 'Description for Slide 3' },
    { id: 4, name: 'leo', imgUrl: 'img-test-slider/leo.jpg', alt: 'Slide 4', description: 'Description for Slide 4' },
    { id: 5, name: 'rabbit', imgUrl: 'img-test-slider/rabbit.jpg', alt: 'Slide 5', description: 'Description for Slide 5' },
    { id: 6, name: 'wolf', imgUrl: 'img-test-slider/wolf.jpeg', alt: 'Slide 6', description: 'Description for Slide 6' },
];


const PokeList = () => {
    const [keySort, setKeySort] = useState<string>('empty');
    const { data, isError, isLoading } = useGetAllPokemonsQuery();
    const dataSort = data?.results.slice();


    const sortedPokeList = (key: string): any => {
        switch (key) {
            case 'id-' :
                return (a: any, b: any) => +b.url.slice(34, -1) - +a.url.slice(34, -1);
            case 'id+' :
                return (a: any, b: any) => +a.url.slice(34, -1) - +b.url.slice(34, -1);
            case 'name' : 
                return (a: any, b: any) => a.name.localeCompare(b.name);
        }
    };
    
    const content:ReactNode = (dataSort?.sort(sortedPokeList(keySort)).map(obj => 
        <div 
            key={obj.name} 
            className={st.pokeListWrapper}
            >

            <TooltipBadge name={obj.name} />

            <div>
                <div className={st.wrapImg}>
                    <Link to={obj.name}>{obj.name}
                        <img src="/pokeball.svg" alt="pokeball" />
                    </Link>
                </div>
                <p>{obj.url.slice(34, -1)}</p>
                <p>{obj.name}</p>
            </div>
        </div>
    )); 

    return ( 
        <main>
            <section>
                <Select name="pokeList" values={['Please choose sort', 'id+', 'id-', 'name']} keyState={setKeySort}/>
            </section>
            <section 
                className={st.containerPoke}
            >
                {content}
            </section>
        </main>
     );
};
 
export default PokeList;