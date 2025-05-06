import { useAppSelector } from '../../app/hooks';
import { selectCurrentTheme } from '../../utils/themeSlice/themeSlice';
import st from './style.module.css';

const Loader = () => {
    const theme = useAppSelector(selectCurrentTheme);

    return ( 
        <section className={st.loaderContainer}>
            <span className={`${st.loader} ${theme === 'light' ? `${st.loaderLight}` : `${st.loaderDark}`}`}></span>
        </section>
     );
};
 
export default Loader;