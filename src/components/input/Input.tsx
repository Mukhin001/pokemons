import { useAppSelector } from '../../app/hooks';
import { handleBlurInput, handleFocusInput } from '../../utils/inputForm/inputForm';
import { selectWidth } from '../../utils/widthWindow/widthWindowSlice';
import st from './input.module.css';

type TypeInput = 'password' | 'email' | 'text' | 'radio';

interface Props {
    name: string;
    nameRadio?: string;
    type: TypeInput;
    placeholder: string;
    value?: string;
    setMistakeUserForm:  React.Dispatch<React.SetStateAction<string | null>>;
};

const Input = ({ name, nameRadio, type, placeholder, value, setMistakeUserForm }: Props) => {
    const width = useAppSelector(selectWidth);

    return ( 
        <section style={width ? {display: 'flex', justifyContent: 'space-between', gap: '40px'} : {display: 'block'}}>
            <h3>{name}</h3>
            <div className={st.inputWrap}>
                <label htmlFor={name}>{nameRadio}</label>
                <input 
                    onFocus={(e) => handleFocusInput(e, setMistakeUserForm)}
                    onBlur={(e) => handleBlurInput(e, setMistakeUserForm)} 
                    type={type}
                    id={name} 
                    name={name}
                    placeholder={placeholder}
                    className={st.input}
                    defaultValue={value}
                />
            </div>
        </section>
     );
};
 
export default Input;