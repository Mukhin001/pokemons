import { useAppSelector } from '../../../app/hooks';
import { selectWidth } from '../../../utils/widthWindow/widthWindowSlice';
import st from './gender.module.css';
import { selectCurrentTheme } from '../../../utils/themeSlice/themeSlice';

interface Props {
    gender: string | null;
};

const Gender = ({ gender }: Props) => {
    const width = useAppSelector(selectWidth);
    const theme = useAppSelector(selectCurrentTheme); 
    
    return ( 
        <fieldset className={st.profileFieldset} style={width ? {display: 'flex', justifyContent: 'space-between'} : {display: 'grid'}}>
            <h3>Gender</h3>

            <section className={st.wrapGenderInput}>
                <div>
                    <input id='male' type="radio" name='gender' value='male' className={st.profileBtnRadio} defaultChecked={gender === 'male'} />
                    <label htmlFor='male'
                        className={`${st.btnRadioLabel} ${st['btnRadioLabel' + theme]}`}>
                            Male 
                    </label>
                </div>

                <div>
                    <input id='female' type="radio" name='gender' value='female'  className={st.profileBtnRadio} defaultChecked={gender === 'female'} />
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