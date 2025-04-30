import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import st from '../../components/auth/authUser/style.module.css';
import Tooltip from '../../components/tooltip/Tooltip';
import Input from '../../components/input/Input';
import Btn from '../../components/button/Btn';
import { useNavigate } from 'react-router-dom';

interface AuthFormFields extends HTMLFormControlsCollection {
    username: HTMLInputElement;
    email: HTMLInputElement;
    userPassword: HTMLInputElement;
    userPasswordrepeat: HTMLInputElement;
};

interface AuthFormElements extends HTMLFormElement {
    readonly elements: AuthFormFields;
};

const Profile = () => {
    const { id, name, email, password, gender, birthdate } = useAppSelector(state => state.authUser);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [mistakeUserForm, setMistakeUserForm] = useState<string | null>(null);
    
    const handleSubmitForm = ( e: React.FormEvent<AuthFormElements>) => {
        e.preventDefault();

        const { elements } = e.currentTarget;
        const name = elements.username.defaultValue;
        const email = elements.email.defaultValue;
        const password = elements.userPassword.defaultValue;
        const passwordRepeat = elements.userPasswordrepeat.defaultValue;
            console.log(name);
            
        if(name.length === 0) {
            setMistakeUserForm('name empty');
            return;
        }
        if(email.length === 0) {
            setMistakeUserForm('email empty');
            return;
        }
        if(password.length === 0 ) {
            setMistakeUserForm('password empty');
            return;
        }
        if(passwordRepeat.length === 0 ) {
            setMistakeUserForm('passwordRepeat empty');
            return;
        }
        if(password !== passwordRepeat) {
            setMistakeUserForm("the password doesn't match");
            return;
        }
        

        // if(name.trim().length !== 0 && email && password) {
        //     dispatch(authCreate({ id: lastId + 1, name: name, email: email, password: password}));
        //     dispatch(userEnter({ id: lastId + 1, name: name, email: email, password: password}));
        //     setModal(false);
        // }
    };

    const handleExitToHome = () => {
        navigate('/', {replace: true})
    };

    return ( 
        <main style={{display: 'grid', justifyContent: 'center'}}>
            <h3>About Me</h3>
            <form onSubmit={handleSubmitForm} style={{position: 'relative'}}>
                <div className={st.wrapAccount}>
                    {mistakeUserForm &&
                        <Tooltip nameStyle='CraeteAuth'>
                            <h3>{mistakeUserForm}</h3>
                        </Tooltip>
                    }
                    <Input name='username' type='text' placeholder='login' value={`${name && name}`} setMistakeUserForm={setMistakeUserForm} />
                    <Input name='email' type='email' placeholder='email' value={`${email && email}`} setMistakeUserForm={setMistakeUserForm} />
                    <Input name='userPassword' type='password' placeholder='password' value={`${password && password}`} setMistakeUserForm={setMistakeUserForm} />
                    <Input name='userPasswordrepeat' type='password' placeholder='passwordrepeat' value={`${password && password}`} setMistakeUserForm={setMistakeUserForm} />
                    <Btn content='Save'/>
                </div>
            </form>
            <Btn content='Next' />
            <Btn content='Exit to Home' onclickFn={handleExitToHome} />
        </main>
     );
};
 
export default Profile;