import { ReactNode, useMemo, useState } from "react";
import { PokemonsAll, useGetAllPokemonsQuery } from "../../../../../api/pokemons/pokemonsAll/pokemonsAll";
import ListPoke from "./listPoke/ListPoke";
import st from './style.module.css';
import Loader from "../../../../loader/Loader";
import ErrorComponent from "../../../../error/ErrorComponent";
import { Link } from "react-router-dom";

interface Props {
    theme: string | null;
    setStrip: React.Dispatch<React.SetStateAction<boolean | undefined>>;
};

interface Poke {
    name: string;
    array: PokemonsAll[];
};

const ContentPoke = ({ setStrip, theme }: Props) => {
    const { data, isError, isLoading } = useGetAllPokemonsQuery();
    const pokemons: Poke[] = [];
    const [heightSub, setHeightSub] = useState<string>('auto');
    

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

    const handleMouseEnter = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const listPoke = e.currentTarget.lastElementChild as HTMLElement;
        listPoke.style.display = 'block';
        setHeightSub(`${listPoke.offsetHeight + 30}px`);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const listPoke = e.currentTarget.lastElementChild as HTMLElement;
        listPoke.style.display = 'none';
    };

    const handleMouseLeaveConteiner = () => {
        setHeightSub('auto');
    };

    let content:ReactNode;

    if(isLoading) {
        content = <Loader size='small' />
    }

    if(isError) {
        content = 
            <li className={st.headerLi}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <ErrorComponent size="Medium" />
            </li>
    }

    if(data) {
        content = (
            pokemons.map((arr, i) =>                 
                <li key={arr.name}  className={`${st.headerLi} ${theme === 'light' ? `${st.contentLiLight}`: `${st.contentLiDark}`}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link onClick={handleMouseLeave} className={st.pagePokemons} to={`pokemons?pagePokemons=${i + 1}`}>{arr.name}</Link>
                    <div className={st.wrapImgNext}>
                        <img    
                            className={`${theme === 'light' ? `${st.nextImgLight}` : `${st.nextImgDark}`}`} 
                            src="/arrow/next-grey-fat.svg" alt="arrowNext" 
                        />
                    </div>
                    <ListPoke theme={theme} arr={arr.array} setStrip={setStrip} />
                </li>
            ))
    }

    return ( 
        <section  className={theme === 'light' ? `${st.contentMenuWrapLight}`: `${st.contentMenuWrapDark}`}>
      
                <div 
                    style={{height: heightSub, paddingBottom: '30px'}}
                    onMouseLeave={handleMouseLeaveConteiner}
                >
                    <div className={st.wrapContent}>
                        <ul >
                            {content}
                        </ul>
                     </div>
                </div>
       
        </section>
     );
};
 
export default ContentPoke;