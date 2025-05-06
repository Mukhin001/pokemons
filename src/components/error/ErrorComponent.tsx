import { useAppSelector } from "../../app/hooks";
import { selectCurrentTheme } from "../../utils/themeSlice/themeSlice";
import st from './style.module.css';

interface PropsErr {
    size: 'Small'| 'Medium' | 'Large' ;
    display?: string;
    modal?: boolean;
    text?: string;
};

const ErrorComponent = ({ size, display = 'grid', modal = false, text }: PropsErr) => {
    const theme = useAppSelector(selectCurrentTheme);
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