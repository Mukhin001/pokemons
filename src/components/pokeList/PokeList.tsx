import { ReactNode, useEffect, useState } from "react";
import st from './style.module.css';
import { Link } from "react-router-dom";
import TooltipBadge from "./tooltipBadge/TooltipBadge";
import { PokemonsAll  } from "../../api/pokemons/pokemonsAll/pokemonsAll";
import Autocompletee from "../autocomplete/Autocomplete";
import Loader from "../loader/Loader";
import ErrorComponent from "../error/ErrorComponent";
import { useAppSelector } from "../../app/hooks";
import SelectC, { Triangle } from "../select/SelectC";

export interface Pokemon {
    id: number;
    name: string;
    imgUrl: string;
    alt: string;
    description: string;
};

interface PropsDataPoke {
    dataSort: PokemonsAll[] | undefined;
    isLoading: boolean;
    isError: boolean;
};

export const items = [
    { id: 1, name: 'belka', imgUrl: 'img-test-slider/belka.jpg', alt: 'Slide 1', description: 'Description for Slide 1' },
    { id: 2, name: 'fox', imgUrl: 'img-test-slider/fox.jpg', alt: 'Slide 2', description: 'Description for Slide 2' },
    { id: 3, name: 'kroll', imgUrl: 'img-test-slider/kroll.jpg', alt: 'Slide 3', description: 'Description for Slide 3' },
    { id: 4, name: 'leo', imgUrl: 'img-test-slider/leo.jpg', alt: 'Slide 4', description: 'Description for Slide 4' },
    { id: 5, name: 'rabbit', imgUrl: 'img-test-slider/rabbit.jpg', alt: 'Slide 5', description: 'Description for Slide 5' },
    { id: 6, name: 'wolf', imgUrl: 'img-test-slider/wolf.jpeg', alt: 'Slide 6', description: 'Description for Slide 6' },
];


const PokeList = ({ dataSort, isLoading, isError }: PropsDataPoke) => {
    const [keySort, setKeySort] = useState<string>('');
    const [headerStyle, setHeaderStyle] = useState<boolean>(false);
    const [bool, setBool] = useState<boolean>(false);
    const [inputValueLength, setInputValueLength] = useState<any>('');
    const [inputValue, setInputValue] = useState<any>('');
    const pokeFav = useAppSelector(state => state.favPoke);
    const [triangle, setTriangle] = useState<Triangle>('down');

    const mainArticleClick = (e: any) => {
        if(inputValueLength.length === 0 && e.target.dataset.name !== 'inputAutoComplete' &&
            e.target.dataset.name !== 'liAutocomplete' && e.target.dataset.name !== 'btn^' &&
            e.target.dataset.name !== 'headerH3AutoComplete' && e.target.dataset.name !== 'btnAutocompleteClose'
        ) {
            setHeaderStyle(false);
            setBool(false);
        }  
        
    };

    useEffect(() => {
        document.body.addEventListener('click', mainArticleClick);
        return () => {document.body.removeEventListener('click', mainArticleClick)};
    }, [inputValueLength]);

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

    if(isLoading) {
        return <Loader />
    }

    if(isError) {
        return <ErrorComponent size="Large" />
    }
    
    const content:ReactNode = (dataSort?.sort(sortedPokeList(keySort)).map(obj => 
        obj.name.includes(inputValue) &&
        <div 
            key={obj.name} 
            className={st.pokeListWrapper}
            >

            <TooltipBadge name={obj.name} pokeFav={pokeFav.includes(obj.name) ? obj.name : null} />

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

     
    const getInputValueLength = (length: string | null) => {
        setInputValueLength(length);
    };

    return ( 
        <main className={st.containerPokeMain}>
            <section className={st.containerPoke}>
                <div style={{maxWidth: '300px', padding: '2em'}}>
                    <SelectC triangle={triangle} setTriangle={setTriangle} arrayProps={['Please choose sort', 'id+', 'id-', 'name']} keySort={keySort} setKeySort={setKeySort} />
                    <h3>Seach Poke</h3>
                    <Autocompletee 
                        dataSort={dataSort}
                        headerStyle={headerStyle}
                        setHeaderStyle={setHeaderStyle}
                        bool={bool}
                        setBool={setBool}
                        getInputValueLength={getInputValueLength}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                    />
                </div>
            </section>
            <section className={st.containerPoke}>
                {content}
            </section>
        </main>
     );
};
 
export default PokeList;