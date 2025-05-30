import { useAppDispatch } from '../../../../../app/hooks';
import { setCity, setCoords } from '../../../getLocation/locationSlice';
import st from './style.module.css';
import InputCity from './inputCity/InputCity';

interface Props {
    city: string | null;
    setModalCityList: React.Dispatch<React.SetStateAction<boolean>>;
};

const citiesArr = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань',
    'Красноярск', 'Нижний Новгород', 'Челябинск', 'Уфа', 'Самара', 'Ростов-на-Дону',
    'Краснодар', 'Омск', 'Воронеж', 'Пермь', 'Волгоград',
];

let cities: string[][] = [];

for(let i = 0; i < citiesArr.length; i+= 4) {
    const arr = citiesArr.slice(i, i + 4);
    cities.push(arr);
};

const ChossingCity = ({ city, setModalCityList }: Props) => {
    const dispatch = useAppDispatch();
    
    const handleClickCity = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(setCoords({ latitude: null, longitude: null }));
        if(e.currentTarget.textContent)  dispatch(setCity(e.currentTarget.textContent));       
        setModalCityList(false);
    };
    
    return ( 
        <section className={st.container}>
            <InputCity setModalCityList={setModalCityList}/>
            <div className={st.cityList}>
                {cities.map((el, i) => 
                    <ul key={'city' + i}>
                        {el.map(e => 
                            <li className={`${st.li} ${e === city && st.activeLi}`} 
                                key={e} 
                                onClick={handleClickCity}>
                                {e}
                            </li>
                        )}
                    </ul>
                )}
            </div>
        </section>
     );
};
 
export default ChossingCity;