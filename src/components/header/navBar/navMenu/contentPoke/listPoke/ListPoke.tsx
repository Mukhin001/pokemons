import { Link } from 'react-router-dom';
import { PokemonsAll } from '../../../../../../api/pokemons/pokemonsAll/pokemonsAll';
import st from './style.module.css';

interface Props {
    theme: string | null;
    arr: PokemonsAll[];
    setStrip: React.Dispatch<React.SetStateAction<boolean | undefined>>;
};

const ListPoke = ({ theme, arr, setStrip }: Props) => {
    return ( 
        <section className={`${st.conteiner} ${theme === 'light' ? `${st.subMenuWrapLight}` : `${st.subMenuWrapDark}`}`}>
            <ul className={st.wrapLi}>
                {arr.map(el =>  
                    <li key={el.name}>
                        <Link 
                            to={`pokemons/${el.name}`} 
                            className={`${theme === 'light' ? `${st.subLinkLight}`: `${st.subLinkDark}`}`}
                            onClick={() => setStrip(false)}
                        >
                            {el.name}
                        </Link>
                    </li>
                )}
            </ul>
        </section>
     );
};
 
export default ListPoke;