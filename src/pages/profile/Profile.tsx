import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Tooltip from '../../components/tooltip/Tooltip';
import Input from '../../components/input/Input';
import Btn from '../../components/button/Btn';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../components/auth/authUserSlice';
import { updateUsers } from '../../components/auth/authUsersSlice';
import Modal from '../../components/modal/Modal';
import st from './profile.module.css';
import Gender from './gender/Gender';
import Birthday from './birthday/Birthday';
import Communications from './communications/Communications';

interface AuthFormFields extends HTMLFormControlsCollection {
    username: HTMLInputElement;
    email: HTMLInputElement;
    userPassword: HTMLInputElement;
    userPasswordrepeat: HTMLInputElement;
    gender: HTMLInputElement;
};

interface AuthFormElements extends HTMLFormElement {
    readonly elements: AuthFormFields;
};

const Profile = () => {
    const { id, name, email, password, gender, birthdate } = useAppSelector(state => state.authUser);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [mistakeUserForm, setMistakeUserForm] = useState<string | null>(null);
    const [modal, setModal] = useState<boolean>(false);
    
    const handleSubmitForm = ( e: React.FormEvent<AuthFormElements>) => {
        e.preventDefault();

        const { elements } = e.currentTarget;
        const newname = elements.username.value;
        const newemail = elements.email.value;
        const newpassword = elements.userPassword.value;
        const newpasswordRepeat = elements.userPasswordrepeat.value;
        const newgender = elements.gender.value; 
                 
        if(newname.length === 0) {
            setMistakeUserForm('name empty');
            return;
        }
        if(newemail.length === 0) {
            setMistakeUserForm('email empty');
            return;
        }
        if(newpassword.length === 0 ) {
            setMistakeUserForm('password empty');
            return;
        }
        if(newpasswordRepeat.length === 0 ) {
            setMistakeUserForm('passwordRepeat empty');
            return;
        }
        if(newpassword !== newpasswordRepeat) {
            setMistakeUserForm("the password doesn't match");
            return;
        }
        if(name === newname && email === newemail && password === newpassword && (newgender === '' || newgender === gender)) {
            setMistakeUserForm('the data has not changed');
            return;
        }

        
        setModal(true);
        dispatch(updateUsers({ id, name: newname, email: newemail, password: newpassword, gender: newgender ? newgender : null , birthdate } ));
        dispatch(updateUser({ id, name: newname, email: newemail, password: newpassword, gender: newgender ? newgender : null , birthdate } ));
    };

    const handleExitToHome = () => {
        navigate('/', {replace: true})
    };

    const handleBackPage = () => {
        navigate(-1);
    };

    const handleSaveNewDataUser = () => {
        setModal(false);
        navigate(-1);
    };

    return ( 
        <main style={{display: 'grid', justifyContent: 'center'}}>
            {modal && 
                <Modal close={false} header='data changed' setModal={setModal}>
                    <h3>new data changed and saved</h3>
                    <Btn content='Ok' onclickFn={handleSaveNewDataUser} />
                </Modal>
            }
            <h2>Profile</h2>
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
                    <Gender gender={gender} />
                    <Birthday />
                    <Communications />
                    <Btn content='Save'/>
                </div>
            </form>
            <Btn content='Back' onclickFn={handleBackPage} />
            <Btn content='Exit to Home' onclickFn={handleExitToHome} />
        </main>
     );
};
 
export default Profile;