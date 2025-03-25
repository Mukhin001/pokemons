import { useAppSelector } from '../../../../app/hooks';
import { navBarMenu } from '../../navBar/navBarMenu';
import st from './style.module.css';

interface Props {
    subName: string | null;
};

const SubContent = ({ subName }: Props) => {
    const theme = useAppSelector(state => state.theme.value);
    return ( 
        <section  className={theme === 'light' ? `${st.subMenuWrapLight}`: `${st.subMenuWrapDark}`}>
            {navBarMenu.map(obj => obj.name === subName &&
                <div 
                    key={obj.name} 
                    style={{paddingBottom: '100px'}}
                >
                    {obj.arr.map(elem => 
                        <ul key={elem} className={st.wrapLi}>
                            <li className={`${theme === 'light' ? `${st.subLiLight}`: `${st.subLiDark}`}`}>{elem}</li>
                        </ul>
                    )}
                </div>
            )}
        </section>
     );
};
 
export default SubContent;