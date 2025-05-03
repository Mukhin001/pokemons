import { useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectWidth } from '../../../utils/widthWindow/widthWindowSlice';
import st from './gender.module.css';

const Gender = () => {
    const width = useAppSelector(selectWidth);
    const [radio, setradio] = useState<string>('male');
    
    return ( 
        <fieldset className={st.profileFieldset} style={width ? {display: 'flex', justifyContent: 'space-between'} : {display: 'grid'}}>
            <h3>Gender</h3>

            <section className={st.wrapGenderInput}>
                <div>
                    <label
                        style={radio === 'male' ? {border: '2px solid #fb7dc4'} : {border: '2px solid white'}}
                        className={st.btnRadioLabel}>
                            Male
                            <input type="radio" name='gender' 
                                onChange={() => setradio('male')}
                                className={st.profileBtnRadio} 
                            />
                        </label>
                </div>

                <div>
                    <label
                        style={radio === 'female' ? {border: '2px solid #fb7dc4'} : {border: '2px solid white'}}
                        className={st.btnRadioLabel}>
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