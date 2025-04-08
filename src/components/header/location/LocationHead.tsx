import { useState } from 'react';
import City from './city/City';
import st from './style.module.css';
import Weather from './weather/Weather';

export interface PropsCity {
    city: string | null;
}

const LocationHead = () => {
    const [city, setCity] = useState<string | null>('Moscow');

    return ( 
        <section className={st.container}>
            <div className={st.wrapper}>
                <City city={city} />
                <Weather city={city} />
            </div>
        </section>
     );
};
 
export default LocationHead;