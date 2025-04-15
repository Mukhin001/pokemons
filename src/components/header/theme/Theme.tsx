import { useAppDispatch } from "../../../app/hooks";
import { changeTheTheme } from "./themeSlice";
import st from './style.module.css';
import { PropsHeader } from "../Header";

const Theme = ({ theme }: PropsHeader) => {
    const dispatch = useAppDispatch();
    
    const handleTheme = () => {
        try{
            if(localStorage.getItem('theme') === 'light') {
                dispatch(changeTheTheme('dark'));
                localStorage.setItem('theme', 'dark');
             } else {
                dispatch(changeTheTheme('light'));
                localStorage.setItem('theme', 'light');
             }
        } catch(err) {
            alert("Uncaught SecurityError: Failed to read the 'localStorage' property from 'Window': Access is denied for this document.")
        }
    };

    
    return ( 
        <section 
            className={`${st.backGroundTheme}
                ${theme === 'light' ? `${st.backGroundThemeLight}` : `${st.backGroundThemeDark}`}`} onClick={handleTheme}>
            <h4>{theme === 'light' ? 'sun' : 'moon'}</h4>
            <div className={`${st.wrapImgTheme} 
                    ${theme === 'light' ? `${st.wrapImgThemeLight}` : `${st.wrapImgThemeDark}`}`}>
                <img src={theme === 'light' ? '/icons_menu/sun.svg' : '/icons_menu/moon.svg'} alt="theme" />
            </div>
        </section>
    );
};
 
export default Theme;