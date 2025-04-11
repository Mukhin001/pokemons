import { useEffect } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { setCoords } from "./locationSlice";
import { setUserAgent } from "./userAgentSlice";

const ocArr: string[] = ['windows', 'mac', 'linux', 'android'];
const browserArr: string[] = ['Firefox', 'Safari', 'OPR', 'Edg', 'KHTML'];

const GetLocation = () => {
    const dispatch = useAppDispatch();    
    const navigate = window.navigator;  
    const getLanguage = navigate.language;
    let getDevice = navigate.userAgent;
    getDevice = getDevice.toLowerCase();
    let oc: string ;
    let browser: string;
console.log(getDevice);

    for(let i = 0; i < browserArr.length; i++) {
        const ocI = ocArr[i] && ocArr[i].toLowerCase();
        const browI = browserArr[i].toLowerCase();
        if(getDevice.includes(ocI)) {
            if(ocI === 'mac') {
                oc = 'apple';
            } else {
                oc = ocI;
            }
        } 

        if(getDevice.includes(browI)) {
            if(browI === 'edg') {
                browser = 'Microsoft Edge';
            } else if(browI === 'opr') {
                browser = 'Opera';
            } else if(browI === 'khtml') {
                browser = 'Chrome';
            } else if(ocI === 'apple' && browI === 'safari') {
                browser = 'Safari';
            } else {
                browser = browI;
                console.log(2);
                
            }
        }
    };
    
    useEffect(() => {    
        dispatch(setUserAgent({ device: oc, oc, browser, language: getLanguage }));
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