import { useState } from 'react';
import st from './style.module.css';
import { useAppSelector } from '../../../app/hooks';

interface AuthFormFields extends HTMLFormControlsCollection {
    username: HTMLInputElement
    userPassword: HTMLInputElement
};

interface AuthFormElements extends HTMLFormElement {
    readonly elements: AuthFormFields
};


const FormEnterAccount = () => {
    const [usernameFocus, setUsernameFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const authUsers = useAppSelector(state => state.auth);

    const handleSubmitForm = ( e: React.FormEvent<AuthFormElements>) => {
        e.preventDefault();

        const { elements } = e.currentTarget;
        const name = elements.username.value;
        const password = elements.userPassword.value;
        console.log(authUsers);
        console.log(name, password);
        
        
    };
    
    return ( 
        <form onSubmit={handleSubmitForm}>
            <div className={st.wrapAccount}>
                <h3>Enter</h3>
                <div className={`${st.inputWrap} ${usernameFocus && `${st.borderActivWrap}` }`}    >
                    <label htmlFor="username"></label>
                    <input 
                        onFocus={() => setUsernameFocus(true)}
                        onBlur={() => setUsernameFocus(false)} 
                        type="text" 
                        id="username" 
                        name="username"
                        style={usernameFocus ? {backgroundColor: 'rgb(255, 255, 255)'} : {backgroundColor: 'gainsboro'}}
                    />
                    <button>x</button>
                </div>
 
                <div className={`${st.inputWrap} ${passwordFocus && `${st.borderActivWrap}`}`}>
                    <label htmlFor="userPassword"></label>
                    <input 
                        onFocus={() => setPasswordFocus(true)} 
                        onBlur={() => setPasswordFocus(false)} 
                        type="password" 
                        id="userPassword" 
                        name="userPassword"
                        style={passwordFocus ? {backgroundColor: 'rgb(255, 255, 255)'} : {backgroundColor: 'gainsboro'}}
                    />
                    <button>{'<>'}</button>
                </div>

                <div className={st.wrapLogInBtn}>
                    <button>Log In</button>
                </div>
            </div>
        </form>
     );
};
 
export default FormEnterAccount;