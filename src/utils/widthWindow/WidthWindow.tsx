import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setWidthWindow } from "./widthWindowSlice";

const WidthWindow = () => {
    const dispatch = useAppDispatch();
    
    useEffect(() => {

        if(typeof window === 'undefined') return;
        
        const handleResize = () => {
            const width = window.innerWidth > 1100;  
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