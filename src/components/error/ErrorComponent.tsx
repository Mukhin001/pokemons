import { useAppSelector } from "../../app/hooks";
import st from './style.module.css';

interface PropsErr {
    size: string;
    display?: string;
    modal?: boolean;
    text?: string;
};

const ErrorComponent = ({ size, display = 'grid', modal = false, text }: PropsErr) => {
    const theme = useAppSelector(state => state.theme.value);
    // Large Medium Small
    return ( 
        <section className={st[`container${display}`]} >
            <h3>404</h3>
            <h3>{text}not found</h3>
            <div className={st.wrapGhost}>
                <div className={st[`wrapImg${size}`]}>
                    {modal ? 
                        <img src='/ghost/ghost-black.svg' className={st.imgGhost} alt="ghost" />
                        :
                        <img src={theme === 'light' ? '/ghost/ghost-black.svg' : '/ghost/ghost-white.svg'} className={st.imgGhost} alt="ghost" />
                    }
                </div>
                <section className={st[`shadowWrap${size}`]}>
                    <div className={st[`shadow${size}`]}></div>
                </section>
            </div>
        </section>
     );
};   
 
export default ErrorComponent;