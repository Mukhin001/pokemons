import { useAppSelector } from '../../../../app/hooks';
import { selectCurrentTheme } from '../../../../utils/themeSlice/themeSlice';
import { selectWidth } from '../../../../utils/widthWindow/widthWindowSlice';
import st from './style.module.css';

const UserAgent = () => {
    const userAgent = useAppSelector(state => state.userAgent);
    const theme = useAppSelector(selectCurrentTheme);
    const width = useAppSelector(selectWidth);
    
    return ( 
        <section style={width ? {display: 'flex', gap: '20px'} : {display: 'block'}}>
            <h3>{userAgent.language}</h3>
            <h3>{userAgent.browser}</h3>
            <div  className={st.wrapImg}>
                <img src={`/userAgent/${userAgent.oc}-${theme === 'light' ? 'black' : 'white'}.svg`} alt="oc" />
            </div>
        </section>
    );
};
 
export default UserAgent;