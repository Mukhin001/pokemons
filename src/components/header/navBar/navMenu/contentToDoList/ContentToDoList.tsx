import { useAppSelector } from '../../../../../app/hooks';
import { selectCurrentTheme } from '../../../../../utils/themeSlice/themeSlice';
import ErrorComponent from '../../../../error/ErrorComponent';
import st from '../contentPoke/style.module.css';

const ContentToDoList = () => {
    const theme = useAppSelector(selectCurrentTheme);
    
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