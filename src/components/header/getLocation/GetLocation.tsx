import { useEffect } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { setCoords } from "./locationSlice";
import { setUserAgent } from './userAgentSlice';

const ocArr: string[] = ['windows', 'mac', 'linux', 'android'];
const browserArr: string[] = ['Firefox', 'OPR', 'Edg', 'Samsung', 'YaBrowser']; // saf chome
const browSafChrom: string[] = ['Chrome', 'Version'];
const GetLocation = () => {
    const dispatch = useAppDispatch();    
    const navigate = window.navigator;  
    const getLanguage = navigate.language;

    // const moz = 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:28.0) Gecko/20100101 Firefox/28.0)';
    // const chrom = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'; // 110
    // const opera = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41';
    // const micro = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59';
    // const safari = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1';
    // const safari2 = 'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16';
    // const YaBrowser = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 YaBrowser/25.2.0.0 Safari/537.36';
    // const sum = 'Mozilla/5.0 (Linux; Tizen 2.3; SAMSUNG SM-Z130H) AppleWebKit/537.3 (KHTML, like Gecko) SamsungBrowser/1.0 Mobile Safari/537.3';
    // const sum2 = 'Mozilla/5.0 (Linux; Tizen 2.3; SAMSUNG SM-Z130H) AppleWebKit/537.3 (KHTML, like Gecko) Version/2.3 Mobile Safari/537.3';
    // const noname = 'Mozilla/5.0 (comp; Tizen 2.3;  SM-Z130H) AppleWebKit/537.3 (KHTML, like Gecko) Brave/2.3 Mobile Brave/537.3';
    
    let getDevice = navigate.userAgent;
    
    getDevice = getDevice.toLowerCase();
    let oc: string ;
    let browser: string;
    let countOc= 0;
    let countBrowser= 0;

    for(let i = 0; i < browserArr.length; i++) {
        const ocI = ocArr[i] && ocArr[i].toLowerCase();
        const browSafChromI = browSafChrom[i] && browSafChrom[i].toLowerCase();
        const browI = browserArr[i].toLowerCase();
        if(getDevice.includes(ocI)) {
            if(ocI === 'mac') {
                oc = 'apple';
            } else {
                oc = ocI;
            }
        } else {
            countOc ++;
        }
        
        if(getDevice.includes(browI)) {
            if(browI === 'opr') {
                browser = 'Opera';
            } else if(browI === 'edg') {
                browser = 'Microsoft Edge';
            } else if(browI === 'yabrowser') {
                browser = 'yandex';
            } else {
                browser = browI;
            }
        } else {
            countBrowser ++;
        }
        
        if(getDevice.includes(browSafChromI)) {
            if(browSafChromI === 'version') {
                browser = 'Safari';
            } else if(browSafChromI === 'chrome'){
                browser = browSafChromI;
            }
        } else {
            countBrowser ++;
        }

        if(countOc > 4) {
            oc = 'notdefined';
        }
        if(countBrowser > 9) {
            browser = 'not defined';
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