import { useAppSelector } from '../../../app/hooks';
import { selectCurrentTheme } from '../../../utils/themeSlice/themeSlice';
import st from './style.module.css';

const FooterTop = () => {
    const theme = useAppSelector(selectCurrentTheme);

    return ( 
        <section
            className={`${theme === 'light' ? `${st.topConteinerLight}` : `${st.topConteinerDark}`} ${st.topConteiner}`}  
        >
            FooterTop
        </section>
     );
}
 
export default FooterTop;