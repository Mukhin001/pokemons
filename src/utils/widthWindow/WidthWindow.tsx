import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setWidthWindow } from "./widthWindowSlice";

const WidthWindow = () => {
    const dispatch = useAppDispatch();
    const [stateWidth, setStateWidth] = useState(0);
    console.log(stateWidth);
    
    useEffect(() => {

        if(typeof window === 'undefined') return;
        
        const handleResize = () => {
            const width = window.innerWidth > 1100;  
            const dymanicWidth = window.innerWidth;
             setStateWidth(dymanicWidth)
            dispatch(setWidthWindow(width));
        };

        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);

    }, [dispatch]);

    
    return ( 
        <></> 
    );
};
 
export default WidthWindow;