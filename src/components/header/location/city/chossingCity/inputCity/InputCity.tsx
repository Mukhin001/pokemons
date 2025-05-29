import { ReactNode, useState } from "react";
import { useLazyGetWeatherCityQuery } from "../../../../../../api/weather/getWeather/getWeather";
import Loader from "../../../../../loader/Loader";
import Modal from "../../../../../modal/Modal";
import ErrorComponent from "../../../../../error/ErrorComponent";
import { useAppDispatch } from "../../../../../../app/hooks";
import { setCity } from "../../../../getLocation/locationSlice";
import st from './style.module.css';
import Tooltip from "../../../../../tooltip/Tooltip";

interface Props {
    setModalCityList: React.Dispatch<React.SetStateAction<boolean>>;
};

const InputCity = ({ setModalCityList }: Props) => {
    const [inputCity, setInputCity] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false);
    const [tooltip, setTooltip] = useState<boolean>(false);
    const [focusInput, setFocusInput] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const [ trigger, { data, isLoading, isError }] = useLazyGetWeatherCityQuery();
    let content: ReactNode;

    const hadnleInputCity = () => {
        
        if(!inputCity || inputCity.trim().length === 0) {
            setTooltip(true);
        } else {      
            trigger(inputCity);
            setModal(true);
        }
    };   

    if(isLoading) {
        content = <Loader size='small' />
    }
    
    if(isError) {
        content = modal && (
            <Modal header={`City ${inputCity} not found`} setModal={setModal}>
                <ErrorComponent size='Small' display='flex' modal={true} text=' city '/>
            </Modal>
        )
    }

    if(data) {
        dispatch(setCity(data.name));
        setModalCityList(false);
    }

    return ( 
        <section className={st.inputCityWrap}>
            <div 
                className={`${st.seachCityWrap} ${focusInput ? `${st.seachCityWrapFocus}` : `${st.seachCityWrapBlur}`}`}
                
                onMouseOver={(e) => {if(!focusInput) e.currentTarget.className=`${st.seachCityWrap} ${st.seachCityWrapOver}`}}    
                onMouseLeave={(e) => {if(!focusInput) e.currentTarget.className=`${st.seachCityWrap} ${st.seachCityWrapleave}`}}    
            >
                <label>
                    <input 
                        className={st.inputSeachCity} 
                        type='text' value={inputCity} 
                        onFocus={() => {setTooltip(false); setFocusInput(true)}}
                        onBlur={() => setFocusInput(false)} 
                        onChange={(e) => setInputCity(e.target.value)}
                        placeholder="Find your city"
                    />
                </label>
                <button onClick={hadnleInputCity} className={st.loupeBtn}>
                    <img src={`/icon_btn/loupe-${focusInput ? 'black' : 'grey'}.svg`} alt='loupe'/>
                </button>
            </div>
            {tooltip && <Tooltip nameStyle='modalCity'><h3>Empty</h3></Tooltip>}
            {content}
        </section>
     );
};
 
export default InputCity;