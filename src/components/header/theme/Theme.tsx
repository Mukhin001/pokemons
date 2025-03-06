import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { changeTheTheme } from "./themeSlice";

const Theme = () => {
    const theme = useAppSelector(state => state.theme.value);
    const dispatch = useAppDispatch();

    const handleTheme = () => {
        if(localStorage.getItem('theme') === 'light') {
           dispatch(changeTheTheme('dark'));
           localStorage.setItem('theme', 'dark');
        } else {
           dispatch(changeTheTheme('light'));
           localStorage.setItem('theme', 'light');
        }
       
    };
    
    return ( 
        <button onClick={handleTheme}>{theme}</button>
     );
};
 
export default Theme;