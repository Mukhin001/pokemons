import { useEffect } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { setCoords } from "../locationSlice";

const GetLocation = () => {
    const dispatch = useAppDispatch();    
    const navigate = window.navigator;  
    
    useEffect(() => {    
        const getGeo = setTimeout(() => {
            navigate.geolocation.getCurrentPosition(successGeo, errorGeo);
        }, 1000);
        return () => clearTimeout(getGeo);
    }, []);

    const successGeo = (position: any) => {
        dispatch(setCoords({ latitude: position.coords.latitude, longitude: position.coords.longitude}))
    };
    const errorGeo = (error: any) => {
        console.log(error.message);    // выводим сообщение об ошибке
    };
    return ( <></> );
};
 
export default GetLocation;