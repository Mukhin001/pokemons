import { useAppSelector } from '../../../../app/hooks';
import Modal from '../../../modal/Modal';
import { PropsCity } from '../LocationHead';
import ChossingCity from './chossingCity/ChossingCity';
import st from './style.module.css';
import { useState } from 'react';

const City = ({ city, dataCity }: PropsCity) => {
    const [modal, setModal] = useState<boolean>(false);
    const theme = useAppSelector(state => state.theme.value);

    const handleGetCity = () => {
        setModal(true);
    };

    return ( 
        <section className={st.containerCity}>
            <section className={st.container} onClick={handleGetCity}>
                <div className={st.wrapImg}>
                    <img src={`/arrow/compass-${theme === 'light' ? 'white' : 'black'}.svg`} alt="location" />
                </div>
                <h3 style={{color: `${theme === 'light' ? 'black' : 'white'}`}}>{dataCity ? dataCity : city}</h3>
            </section>
            {modal && 
                <Modal header='Cities' modal={modal} setModal={setModal}>
                    <ChossingCity city={city} setModal={setModal} />
                </Modal>}
        </section>
     );
};
 
export default City;