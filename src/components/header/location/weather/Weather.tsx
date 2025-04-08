import { useGetWeatherQuery } from "../../../../api/weather/weatherApi";
import ErrorComponent from "../../../error/ErrorComponent";
import Loader from "../../../loader/Loader";
import { PropsCity } from "../LocationHead";
import st from './style.module.css';

const Weather = ({ city }: PropsCity) => {
    const { data, isLoading, isError } = useGetWeatherQuery(city);
    const temp = Math.round(data?.main.temp - 273.15);

    if(isLoading) {
        return <Loader />
    }

    if(isError) {
        return <ErrorComponent shadowLittle={true} />
    }

    return ( 
        <section className={st.container}>
            weather
            <h3>Moscow</h3>
            <h3>{temp}</h3>
        </section>
     );
};
 
export default Weather;