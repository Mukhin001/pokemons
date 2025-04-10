import { ReactNode, useMemo, useState } from "react";
import { PokemonsAll, useGetAllPokemonsQuery } from "../../../../../../../api/pokemons/pokemonsAll/pokemonsAll";
import st from '../../style.module.css';
import PokeList from "./pokeList/PokeList";
import { PropsMobMenu } from "../Content";
import { Link } from "react-router-dom";
import Btns from "../btns/Btns";
import Loader from "../../../../../../loader/Loader";
import ErrorComponent from "../../../../../../error/ErrorComponent";

export interface Poke {
    name: string;
    array: PokemonsAll[];
};

const Poke = ({ nameMenu, setshowDrawer, setnameMenu }: PropsMobMenu) => {
    const [namePoke, setnamePoke] = useState<Poke | any>(null);
    const { data, isError, isLoading } = useGetAllPokemonsQuery();
    const pokemons: Poke[] = [];

    const sortedPoke = useMemo(() => {
        const sortedPoke = data?.results.slice();
        sortedPoke?.sort((a, b) => a.name.localeCompare(b.name));
        return sortedPoke;
    }, [data?.results]);

    if(sortedPoke) {
        for(let i = 0; i < sortedPoke.length; i += 20) {
            const chuck = sortedPoke.slice(i, i + 20);
            const nameFirst = chuck.slice(0, 1).map(e => e.name);
            const nameLast = chuck.slice(-1).map(e => e.name);
            pokemons.push({
                name: nameFirst + '-' + nameLast,
                array: chuck,
            })
        };  
    };

    const handleCkickPoke = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const p = pokemons.find(el => el.name === e.currentTarget.textContent);
        setnamePoke(p);
    };

    let content: ReactNode;

    if(isLoading) {
        content = <Loader />
    }
    if(isError) {
        content = <ErrorComponent size="Medium" />
    }
    if(data) {
        content =  
            (pokemons.map(arr => 
                <li key={arr.name} className={st.headerLi} onClick={handleCkickPoke}>
                    <div>{arr.name}</div>
                    <div className={st.wrapImgNext}>
                        <img src="/arrow/next-grey-fat.svg" alt="arrowNext" />
                    </div>
                </li>
            ))
    }

    return ( 
        <section>
            
            {!namePoke &&  
                <section>

                    <Btns back='back' setName={setnameMenu} name={nameMenu} setshowDrawer={setshowDrawer}/>

                    <ul>
                       {content}
                    </ul>

                    <div className={st.headerLi}>
                        <Link to='/pokemons' onClick={() => setshowDrawer(false)}>show all pokemons</Link>
                        <div className={st.wrapImgNext}>
                            <img src="/arrow/next-grey-fat.svg" alt="arrowNext" />
                        </div>
                    </div>
                </section>
                }

            {namePoke && <PokeList namePoke={namePoke} setnamePoke={setnamePoke} setshowDrawer={setshowDrawer} />}
        </section>
     );
};
 
export default Poke;