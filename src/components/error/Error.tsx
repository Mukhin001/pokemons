import { useAppSelector } from "../../app/hooks";
import st from './style.module.css';

const Error = () => {
    const theme = useAppSelector(state => state.theme.value);

    return ( 
        <section className={st.container}>
            <h3>404</h3>
            <h3>not found</h3>
            <div className={st.wrapImg}>
                <img src={theme === 'light' ? '/ghost/ghost-black.svg' : '/ghost/ghost-white.svg'} alt="ghost" />
            </div>
            <section className={st.shadowWrap}>
                <div className={st.shadow}></div>
            </section>
        </section>
     );
};
 
export default Error;