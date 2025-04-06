import { Link } from "react-router-dom";
import { PokemonsAll } from "../../../../../../../../api/pokemons/pokemonsAll/pokemonsAll";

interface Poke {
    name: string;
    array: PokemonsAll[];
};

interface Props {
    pokeProps: Poke | undefined;
    setnamePoke:  React.Dispatch<any>;
    setshowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const PokeList = ({ pokeProps, setnamePoke, setshowDrawer }: Props) => {
    
    return ( 
        <section>
            <button onClick={() => setnamePoke(null)}>back pokemons</button>
            <div>{pokeProps?.name}</div>
            <ul>
                {pokeProps?.array.map(el => 
                    <li key={el.name}>
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