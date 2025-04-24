import st from './style.module.css';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { userEnter } from '../authUserSlice';
import Input from '../../input/Input';
import Tooltip from '../../tooltip/Tooltip';
import { useState } from 'react';

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
    const authUsers = useAppSelector(state => state.authUsers);
    const dispatch = useAppDispatch();
      const [mistakeUserForm, setMistakeUserForm] = useState<string | null>(null);

    const handleSubmitForm = ( e: React.FormEvent<AuthFormElements>): void => {
        e.preventDefault();

        const { elements } = e.currentTarget;
        const name = elements.username.value;
        const password = elements.userPassword.value;

        if(name.length === 0 || password.length === 0) {
            setMistakeUserForm('fill in the form');
            return;
        }

        const user = authUsers.find(el => el.name === name && el.password === password);

        if(user) {
            dispatch(userEnter(user));
            setModal(false);
        } else {
            console.log(1);
            
            setMistakeUserForm('Incorrect Username or password');
        }
        
    };
    
    return ( 
        <section>
            <form onSubmit={handleSubmitForm} style={{position: 'relative'}}>
                <div className={st.wrapAccount}>
                    <h3>Enter</h3>
                    {mistakeUserForm &&
                    <Tooltip nameStyle='CraeteAuth'>
                        <h3>{mistakeUserForm}</h3>
                    </Tooltip>
                    }

                    <Input name='username' type='text' placeholder='login' setMistakeUserForm={setMistakeUserForm} />
                    <Input name='userPassword' type='password' placeholder='password' setMistakeUserForm={setMistakeUserForm} />

                    <button className={st.btnForm}>Log In</button>
                    
                </div>
            </form>
            <button className={`${st.btnForm} ${st.lastBtnForm}`} onClick={() => setAuth('createAuth')}>Create Accaunt</button>
        </section>
    );
};
 
export default AuthUser;