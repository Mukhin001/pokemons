import { useAppSelector } from '../../../app/hooks';
import { selectWidth } from '../../../utils/widthWindow/widthWindowSlice';
import st from './gender.module.css';
import { selectCurrentTheme } from '../../../utils/themeSlice/themeSlice';

const Gender = () => {
    const width = useAppSelector(selectWidth);
    const theme = useAppSelector(selectCurrentTheme);
        
    
    return ( 
        <fieldset className={st.profileFieldset} style={width ? {display: 'flex', justifyContent: 'space-between'} : {display: 'grid'}}>
            <h3>Gender</h3>

            <section className={st.wrapGenderInput}>
                <div>
                    <input id='male' type="radio" name='gender' className={st.profileBtnRadio} />
                    <label htmlFor='male'
                        className={`${st.btnRadioLabel} ${st['btnRadioLabel' + theme]}`}>
                            Male 
                    </label>
                </div>

                <div>
                    <input id='female' type="radio" name='gender'  className={st.profileBtnRadio} />
                    <label htmlFor='female'
                        className={`${st.btnRadioLabel} ${st['btnRadioLabel' + theme]}`}>
                            Female 
                    </label>
                </div>  
            </section>
        </fieldset>
     );
};
 
export default Gender;