import ErrorComponent from '../../../../error/ErrorComponent';
import st from '../contentPoke/style.module.css';

interface Props {
    theme: string | null;
};

const ContentToDoList = ({ theme }: Props) => {
    return ( 
        <section  className={theme === 'light' ? `${st.contentMenuWrapLight}`: `${st.contentMenuWrapDark}`}>
            <div>
                <div className={st.wrapContent}>
                    <ul>
                        <li className={st.headerLi}>
                           <ErrorComponent size='Medium' />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
     );
};
 
export default ContentToDoList;