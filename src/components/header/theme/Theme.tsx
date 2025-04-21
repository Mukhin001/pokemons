import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import st from './style.module.css';
import { selectCurrentTheme, toggleTheme } from "../../../utils/themeSlice/themeSlice";

const Theme = () => {
    const theme = useAppSelector(selectCurrentTheme);
    const dispatch = useAppDispatch();

    const handleTheme = () => {
        dispatch(toggleTheme());
        try{
            localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
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