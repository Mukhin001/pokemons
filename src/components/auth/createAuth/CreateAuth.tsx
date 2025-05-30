import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import Tooltip from '../../tooltip/Tooltip';
import st from '../authUser/style.module.css';
import { authCreate } from '../authUsersSlice';
import { userEnter } from '../authUserSlice';
import Input from '../../input/Input';
import Btn from '../../button/Btn';

interface AuthFormFields extends HTMLFormControlsCollection {
    username: HTMLInputElement;
    email: HTMLInputElement;
    userPassword: HTMLInputElement;
    userPasswordrepeat: HTMLInputElement;
};

interface AuthFormElements extends HTMLFormElement {
    readonly elements: AuthFormFields;
};

interface Props {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
};

const CreateAuth = ({ setModal }: Props) => {
    const users = useAppSelector(state => state.authUsers);
    const dispatch = useAppDispatch();
    let lastId = users.find(el => (el.id) && Math.max(Number(el.id)))?.id;
    const [mistakeUserForm, setMistakeUserForm] = useState<string | null>(null);
    
    const handleSubmitForm = ( e: React.FormEvent<AuthFormElements>) => {
        e.preventDefault();

        const { elements } = e.currentTarget;
        const name = elements.username.value;
        const email = elements.email.value;
        const password = elements.userPassword.value;
        const passwordRepeat = elements.userPasswordrepeat.value;
        console.log(mistakeUserForm);
        
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
        console.log(email);
        
        if(!lastId) {
            lastId = '0';
        }
        
        if(users.find(el => el.name === name)) {
            setMistakeUserForm('This name is already taken');
            return;
        }

        if(password !== passwordRepeat) {
            setMistakeUserForm("the password doesn't match");
            return;
        }
         
        if(name.trim().length !== 0 && email && password) {
            dispatch(authCreate({ id: Number(lastId) + 1 + '', name: name, email: email, password: password, gender: null, birthdate: null }));
            dispatch(userEnter({ id: Number(lastId) + 1 + '', name: name, email: email, password: password, gender: null, birthdate: null }));
            setModal(false);
        }
        
    };

    return ( 
        <form onSubmit={handleSubmitForm} style={{position: 'relative'}}>
            <div className={st.wrapAccount}>
                <h3>Enter</h3>
                {mistakeUserForm &&
                    <Tooltip nameStyle='CraeteAuth'>
                        <h3>{mistakeUserForm}</h3>
                    </Tooltip>
                }
                <Input name='username' type='text' placeholder='login' value='' setMistakeUserForm={setMistakeUserForm} />
                <Input name='email' type='email' placeholder='email' value='' setMistakeUserForm={setMistakeUserForm} />
                <Input name='userPassword' type='password' placeholder='userPassword' value='' setMistakeUserForm={setMistakeUserForm} />
                <Input name='userPasswordrepeat' type='password' placeholder='userPasswordrepeat' value='' setMistakeUserForm={setMistakeUserForm} />
                
                <Btn content='Create Accaunt' />
            </div>
        </form>
     );
};
 
export default CreateAuth;