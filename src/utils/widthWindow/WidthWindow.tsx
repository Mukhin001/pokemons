import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setWidthWindow } from "./widthWindowSlice";

const WidthWindow = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        
    const handleResize = () => {
        const width = window.innerWidth > 500;   
            dispatch(setWidthWindow(width))
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    return ( 
        <></> 
    );
};
 
export default WidthWindow;