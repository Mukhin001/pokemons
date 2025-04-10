import Modal from '../../../modal/Modal';
import { PropsCity } from '../LocationHead';
import ChossingCity from './chossingCity/ChossingCity';
import st from './style.module.css';
import { useState } from 'react';

const City = ({ city, dataCity }: PropsCity) => {
    const [modal, setModal] = useState<boolean>(false);

    const handleGetCity = () => {
        setModal(true);
    };

    return ( 
        <section>
            <section className={st.container} onClick={handleGetCity}>
                <div className={st.wrapImg}>
                    <img src="/arrow/location-white.svg" alt="location" />
                </div>
                {dataCity ? <h3>{dataCity}</h3> : <h3>{city}</h3>}
            </section>
            {modal && 
                <Modal header='Cities' modal={modal} setModal={setModal}>
                    <ChossingCity city={city} setModal={setModal} />
                </Modal>}
        </section>
     );
};
 
export default City;