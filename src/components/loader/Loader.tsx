import { useAppSelector } from '../../app/hooks';
import { selectCurrentTheme } from '../../utils/themeSlice/themeSlice';
import st from './style.module.css';

type Size = 'small' | 'medium' | 'large';

interface Props {
    size: Size;
};

const Loader = ({ size }: Props) => {
    const theme = useAppSelector(selectCurrentTheme);

    return ( 
        <section className={st.loaderContainer}>
            <span className={`${st.loader} 
                ${theme === 'light' ? `${st.loaderLight}` : `${st.loaderDark}`}
                ${st[size]}
                `}>
                </span>
        </section>
     );
};
 
export default Loader;