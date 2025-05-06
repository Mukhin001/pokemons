import { useState } from 'react';
import CommentsList from '../../../comments/CommentsList';
import PokeSpecies from '../pokeSpecies/PokeSpecies';
import st from './pokeNav.module.css';

interface Props {
    id: string;
};

const PokeNav = ({ id }: Props) => {
    const [showContent, setShowContent] = useState<string>('Spicies');
    
    return ( 
        <section>
            <ul className={st.wrapLi}>
                <li className={st.pokeNavLi} 
                    style={showContent === 'Spicies' ? {color: '#ed5aadef'} : {}} onClick={() => setShowContent('Spicies')}>
                    <h3>Spicies</h3></li>
                <li className={st.pokeNavLi} 
                    style={showContent === 'Comments' ? {color: '#ed5aadef'} : {}} onClick={() => setShowContent('Comments')}>
                    <h3>Comments</h3></li>
                {/* <li onClick={() => setShowContent('')}>About</li> */}
            </ul>
            {showContent === 'Spicies' && <PokeSpecies id={id} />}
            {showContent === 'Comments' && <CommentsList id={Number(id)} />}
        </section>
     );
};
 
export default PokeNav;