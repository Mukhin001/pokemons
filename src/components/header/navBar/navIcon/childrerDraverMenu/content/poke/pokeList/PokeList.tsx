import { Link } from "react-router-dom";
import st from '../../../style.module.css';
import { Poke } from "../Poke";
import Btns from "../../btns/Btns";

interface Props {
    namePoke: Poke;
    setnamePoke:  React.Dispatch<string | null>;
    setshowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const PokeList = ({ namePoke, setnamePoke, setshowDrawer }: Props) => {
    
    return ( 
        <section>

            <Btns back='back' setName={setnamePoke} name={namePoke.name} setshowDrawer={setshowDrawer} />
            
            <ul>
                {namePoke?.array.map(el => 
                    <li key={el.name} className={st.headerLi}>
                        <Link 
                            to={`pokemons/${el.name}`} 
                            onClick={() => setshowDrawer(false)}
                        >
                            {el.name}
                        </Link>
                    </li>
                )}
            </ul>
        </section>
     );
};
 
export default PokeList;