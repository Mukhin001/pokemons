import { ReactNode, useRef, useState } from "react";
import st from './style.module.css';
import { Link } from "react-router-dom";
import Tooltip from "../tooltip/Tooltip";
import { useAppSelector } from "../../app/hooks";
import { pokeListWrapperDark, pokeListWrapperLight } from "./pokeListStyle";
import Select from "../select/Select";

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
    const theme = useAppSelector(state => state.theme.value);
    const refContainerPoke = useRef(null);
    const [keySort, setKeySort] = useState('empty');

    const mouseEnterWrapper = (e: React.MouseEvent<HTMLSpanElement, MouseEvent> | any): void => {
        (theme === 'dark') ? e.currentTarget.style = pokeListWrapperDark : e.currentTarget.style = pokeListWrapperLight;
    };

    const mouseEnter = (e: React.MouseEvent<HTMLSpanElement, MouseEvent> | any, name: string): void => {
        const tooltip = e.currentTarget.previousElementSibling;
        if(tooltip.dataset.name === name) {
            tooltip.style.opacity = '1';
            tooltip.style.zIndex = '1';
        }
    };

    const mouseLeave = (e: React.MouseEvent<HTMLSpanElement, MouseEvent> | any, name: string): void => {
        const tooltip = e.currentTarget.previousElementSibling;
        if(tooltip.dataset.name === name) {
            tooltip.style.opacity = '0';
            tooltip.style.zIndex = '-1';
        }
    };

    const sortedPokeList = (key: string) => {
        switch (key) {
            case 'id-' :
                return (a: Pokemon, b: Pokemon) => b.id - a.id;
            case 'id+' :
                return (a: Pokemon, b: Pokemon) => a.id - b.id;
            case 'name' : 
                return (a: Pokemon, b: Pokemon) => a.name.localeCompare(b.name);
        }
    };

    const content:ReactNode = (items.sort(sortedPokeList(keySort)).map(obj => 
        <div 
            key={obj.alt} 
            className={st.pokeListWrapper}
            onMouseEnter={mouseEnterWrapper}
            >
            <div className={st.wrapTooltip}>
                <Tooltip name={obj.name}>
                    <p>{obj.name}</p>
                    <p>{obj.description}</p>
                    <p>{obj.alt}</p>
                </Tooltip>
                <span 
                    onMouseEnter={(e) => mouseEnter(e, obj.name)}
                    onMouseLeave={(e) => mouseLeave(e, obj.name)}
                    >tooltip
                </span>
                <button className={st.cardLikeBtn}>like</button>
            </div>

            <div>
                <div className={st.wrapImg}>
                    <Link to={obj.name}><img src={obj.imgUrl} alt={obj.alt} /></Link>
                </div>
                <p>{obj.id}</p>
                <p>{obj.name}</p>
                <p>{obj.alt}</p>
                <p>{obj.description}</p>
            </div>
        </div>
    )); 

    return ( 
        <main>
            <section>
                <Select name="pokeList" values={['Please choose sort', 'id+', 'id-', 'name']} keyState={setKeySort}/>
            </section>
            <section 
                ref={refContainerPoke} 
                className={st.containerPoke}
            >
                {content}
            </section>
        </main>
     );
};
 
export default PokeList;