import ErrorComponent from '../../../../error/ErrorComponent';
import st from '../contentPoke/style.module.css';

interface Props {
    theme: string | null;
};

const ContentWords = ({ theme }: Props) => {
    return ( 
        <section  className={theme === 'light' ? `${st.contentMenuWrapLight}`: `${st.contentMenuWrapDark}`}>
            <div>
                <div className={st.wrapContent}>
                    <ul>
                        <li className={st.headerLi}>
                            <ErrorComponent shadowLittle={true} />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
     );
};
 
export default ContentWords;