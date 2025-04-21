import City from './city/City';
import st from './style.module.css';
import Weather from './weather/Weather';
import { useGetCityQuery } from '../../../api/city/cityApi';
import ErrorComponent from '../../error/ErrorComponent';
import { useAppSelector } from '../../../app/hooks';
import { ReactNode } from 'react';
import Loader from '../../loader/Loader';
import UserAgent from './userAgent/UserAgent';


export interface PropsCity {
    city: string | null;
    dataCity: string | null;
};

interface PropsLocation {
    display: string;
    backGround: string;
};

const LocationHead = ({ display, backGround }: PropsLocation) => {
    const city = useAppSelector(state => state.location.city);
    const latitude = useAppSelector(state => state.location.latitude);
    const longitude = useAppSelector(state => state.location.longitude);
    const width = useAppSelector(state => state.widthWindow.width);
    const { data, isLoading, isError } = useGetCityQuery({ lat: latitude, lon: longitude });
    
    let contentCity: ReactNode;

    if(isLoading) {
        contentCity = <Loader />
    }

    if(isError) {
        contentCity = <ErrorComponent size='Small' display='flex'/>
    }

    if(data) {
        contentCity = <City city={city} dataCity={latitude && data.city} />
    }

    return ( 
        <section className={st.container} style={{ backgroundColor: backGround}}>
            <div className={st.wrapper} style={{ display: display }}>
                <div style={width ? {display: 'flex', gap: '20px'} : {display: 'block'}}>
                    {contentCity}
                    <UserAgent />
                </div>
                {data && <Weather city={city} dataCity={latitude && data.city} />}
            </div>
        </section>
     );
};
 
export default LocationHead;