import { useState } from 'react';
import st from './style.module.css';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { userEnter } from '../authUserSlice';



interface AuthFormFields extends HTMLFormControlsCollection {
    username: HTMLInputElement
    userPassword: HTMLInputElement
};

interface AuthFormElements extends HTMLFormElement {
    readonly elements: AuthFormFields
};

interface Props {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    setAuth: React.Dispatch<React.SetStateAction<null | string>>;
};

const AuthUser = ({ setAuth, setModal }: Props) => {
    const [usernameFocus, setUsernameFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const authUsers = useAppSelector(state => state.authUsers);
    const dispatch = useAppDispatch();

    const handleSubmitForm = ( e: React.FormEvent<AuthFormElements>) => {
        e.preventDefault();

        const { elements } = e.currentTarget;
        const name = elements.username.value;
        const password = elements.userPassword.value;
        
        const user = authUsers.find(el => el.name === name && el.password === password);
        if(user) {
           dispatch(userEnter(user));
           setModal(false);
        }
    };
    
    return ( 
        <section>
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
                            placeholder='login'
                        />
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
                            placeholder='password'
                        />
                    </div>

                    <button className={st.btnForm}>Log In</button>
                    
                </div>
            </form>
            <button className={`${st.btnForm} ${st.lastBtnForm}`} onClick={() => setAuth('createAuth')}>Create Accaunt</button>
        </section>
    );
};
 
export default AuthUser;