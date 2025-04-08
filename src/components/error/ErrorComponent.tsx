import { useAppSelector } from "../../app/hooks";
import st from './style.module.css';

interface Props {
    shadowLittle: boolean;
}

const ErrorComponent = ({ shadowLittle }: Props) => {
    const theme = useAppSelector(state => state.theme.value);

    return ( 
        <section className={st.container} >
            <h3>404</h3>
            <h3>not found</h3>
            <div className={shadowLittle ? st.wrapImgLittle : st.wrapImg}>
                <img src={theme === 'light' ? '/ghost/ghost-black.svg' : '/ghost/ghost-white.svg'} alt="ghost" />
            </div>
            <section className={shadowLittle ? st.shadowWrapLittle : st.shadowWrap}>
                <div className={shadowLittle ? st.shadowLittle : st.shadow}></div>
            </section>
        </section>
     );
};   
 
export default ErrorComponent;