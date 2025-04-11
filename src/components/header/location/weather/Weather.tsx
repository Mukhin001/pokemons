
import { useGetWeatherCityQuery } from "../../../../api/weather/getWeather/getWeather";
import ErrorComponent from "../../../error/ErrorComponent";
import Loader from "../../../loader/Loader";
import st from './style.module.css';

interface Props {
    city: string | null;
    dataCity?: string | null;
};

const Weather = ({ city, dataCity }: Props) => {
    const { data, isLoading, isError } = useGetWeatherCityQuery(dataCity ? dataCity : city);
    
    const temp = Math.round(data?.main.temp - 273.15);

    if(isLoading) {
        return <Loader />
    }

    if(isError) {
        return <ErrorComponent size="Small" display="flex" />
    }

    return ( 
        <section className={st.container}>
            <h3>weather</h3>
            {dataCity ? <h3>{dataCity}</h3> : <h3>{city}</h3>}
            <h3>{temp} &deg;C</h3>
        </section>
     );
};
 
export default Weather;