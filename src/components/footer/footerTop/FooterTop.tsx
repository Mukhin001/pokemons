import { useAppSelector } from '../../../app/hooks';
import st from './style.module.css';

const FooterTop = () => {
    const theme = useAppSelector(state => state.theme.value);

    return ( 
        <section
            className={`${theme === 'light' ? `${st.topConteinerLight}` : `${st.topConteinerDark}`} ${st.topConteiner}`} 
        >
            FooterTop
        </section>
     );
}
 
export default FooterTop;