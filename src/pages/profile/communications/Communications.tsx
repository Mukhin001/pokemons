import { useAppSelector } from '../../../app/hooks';
import { selectCurrentTheme } from '../../../utils/themeSlice/themeSlice';
import st from './communications.module.css';

const Communications = () => {
    const theme = useAppSelector(selectCurrentTheme);

    return ( 
        <section className={st.containerCommunications}>
            <h3>Communications</h3>
            <div>
                <div className={st.wrappLabelCommunications}>
                    <input id='checkboxemail' type='checkbox' disabled 
                        className={`${st.inputCommunications} ${st['inputCommunications' + theme]}`}/>
                    <label htmlFor='checkboxemail'>Согласие на e-mail рассылки</label>
                </div>
                <div  className={st.wrappLabelCommunications}>
                    <input id='checkboxsms' type='checkbox' defaultChecked 
                        className={`${st.inputCommunications} ${st['inputCommunications' + theme]}`}/>
                    <label htmlFor='checkboxsms'>Согласие на sms рассылки</label>
                </div>
            </div>
        </section>
    );
};
 
export default Communications;