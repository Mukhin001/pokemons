import { useAppSelector } from '../../../../app/hooks';
import Modal from '../../../modal/Modal';
import { PropsCity } from '../LocationHead';
import ChossingCity from './chossingCity/ChossingCity';
import st from './style.module.css';
import { useState } from 'react';

const City = ({ city, dataCity }: PropsCity) => {
    const [modalCityList, setModalCityList] = useState<boolean>(false);
    const theme = useAppSelector(state => state.theme.value);
    
    const handleGetCity = () => {
        setModalCityList(true);
    };

    return ( 
        <section className={st.containerCity}>
            <section className={st.container} onClick={handleGetCity}>
                <div className={st.wrapImg}>
                    <img src={`/arrow/compass-${theme === 'light' ? 'white' : 'black'}.svg`} alt="location" />
                </div>
                <h3 
                    className={`${theme === 'light' ? `${st.cityLight}` : `${st.cityDark}`}`}
                >{dataCity ? dataCity : city}</h3>
            </section>
            {modalCityList && 
                <Modal header='Cities' setModal={setModalCityList}>
                    <ChossingCity city={city} setModalCityList={setModalCityList} />
                </Modal>}
        </section>
     );
};
 
export default City;