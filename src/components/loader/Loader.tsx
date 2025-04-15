import { useAppSelector } from '../../app/hooks';
import st from './style.module.css';

const Loader = () => {
    const theme = useAppSelector(state => state.theme.value);

    return ( 
        <section>
            <span className={`${st.loader} ${theme === 'light' ? `${st.loaderLight}` : `${st.loaderDark}`}`}></span>
        </section>
     );
};
 
export default Loader;