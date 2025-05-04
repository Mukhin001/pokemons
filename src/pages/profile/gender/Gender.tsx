import { useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectWidth } from '../../../utils/widthWindow/widthWindowSlice';
import st from './gender.module.css';
import { selectCurrentTheme } from '../../../utils/themeSlice/themeSlice';

const Gender = () => {
    const width = useAppSelector(selectWidth);
    const [radio, setradio] = useState<string>('male');
     const theme = useAppSelector(selectCurrentTheme);
        
    
    return ( 
        <fieldset className={st.profileFieldset} style={width ? {display: 'flex', justifyContent: 'space-between'} : {display: 'grid'}}>
            <h3>Gender</h3>

            <section className={st.wrapGenderInput}>
                <div>
                    <label
                        style={radio === 'male' ? {border: '1px solid #fb7dc4'} : {}}
                        className={`${st.btnRadioLabel} ${st['btnRadioLabel' + theme]}`}>
                            Male
                            <input type="radio" name='gender' 
                                onChange={() => setradio('male')}
                                className={st.profileBtnRadio} 
                            />
                        </label>
                </div>

                <div>
                    <label
                        style={radio === 'female' ? {border: '1px solid #fb7dc4'} : {}}
                        className={`${st.btnRadioLabel} ${st['btnRadioLabel' + theme]}`}>
                            Female
                            <input type="radio" name='gender' 
                                onChange={() => setradio('female')}
                                className={st.profileBtnRadio} 
                            />
                    </label>
                </div>  
            </section>
        </fieldset>
     );
};
 
export default Gender;