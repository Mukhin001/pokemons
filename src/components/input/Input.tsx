import { handleBlurInput, handleFocusInput } from '../../utils/inputForm/inputForm';
import st from './input.module.css';

type TypeInput = 'password' | 'email' | 'text';

interface Props {
    name: string;
    type: TypeInput;
    placeholder: string;
    value?: string;
    setMistakeUserForm:  React.Dispatch<React.SetStateAction<string | null>>;
};

const Input = ({ name, type, placeholder, value, setMistakeUserForm }: Props) => {

    return ( 
        <div className={st.inputWrap}    >
            <label htmlFor={name}></label>
            <input 
                onFocus={(e) => handleFocusInput(e, setMistakeUserForm)}
                onBlur={(e) => handleBlurInput(e, setMistakeUserForm)} 
                type={type}
                id={name} 
                name={name}
                placeholder={placeholder}
                className={st.inputAuth}
                defaultValue={value}
            />
        </div>
     );
};
 
export default Input;