import { useAppDispatch, useAppSelector } from '../../app/hooks';
import st from '../../components/auth/authUser/style.module.css';

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
    
    const handleSubmitForm = ( e: React.FormEvent<AuthFormElements>) => {
        e.preventDefault();

        // const { elements } = e.currentTarget;
        // const name = elements.username.defaultValue;
        // const email = elements.email.defaultValue;
        // const password = elements.userPassword.defaultValue;
        // const passwordRepeat = elements.userPasswordrepeat.defaultValue;
            
        // if(name.trim().length !== 0 && email && password) {
        //     dispatch(authCreate({ id: lastId + 1, name: name, email: email, password: password}));
        //     dispatch(userEnter({ id: lastId + 1, name: name, email: email, password: password}));
        //     setModal(false);
        // }
    };

    const handleFocusname = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        const input = e.currentTarget;
        const parent = e.currentTarget.parentNode as HTMLDivElement;
        if(parent) {
            parent.classList.add(st.borderActivWrap);
        }
        input.style.background = 'rgb(255, 255, 255)';
        //setMistakeUserForm(null);
    };

    const handleBlursname = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        const input = e.currentTarget;
        const parent = e.currentTarget.parentNode as HTMLDivElement;
        if(parent) {
            parent.classList.remove(st.borderActivWrap);
        }
        input.style.background = 'gainsboro';
        //setMistakeUserForm(null);
    };

    return ( 
        <main style={{display: 'grid', justifyContent: 'center'}}>
            <h3>About Me</h3>
            <form onSubmit={handleSubmitForm} style={{position: 'relative'}}>
                <div className={st.wrapAccount}>
                    {/* {mistakeUserForm &&
                        <Tooltip nameStyle='CraeteAuth'>
                            <h3>{mistakeUserForm}</h3>
                        </Tooltip>
                    } */}
                    <div className={`${st.inputWrap}`}>
                        <label htmlFor="username"></label>
                        <input 
                            onFocus={handleFocusname}
                            onBlur={handleBlursname} 
                            type="text" 
                            id="username" 
                            name="username"
                            placeholder='login'
                            className={st.inputAuth}
                            defaultValue={`${name && name}`}
                        />
                    </div>

                    <div className={`${st.inputWrap}`}>
                        <label htmlFor="email"></label>
                        <input 
                            onFocus={handleFocusname}
                            onBlur={handleBlursname} 
                            type="email" 
                            id="email" 
                            name="email"
                            placeholder='email'
                            className={st.inputAuth}
                            defaultValue={`${email && email}`}
                        />
                    </div>

                    <div className={`${st.inputWrap}`}>
                        <label htmlFor="userPassword"></label>
                        <input 
                            onFocus={handleFocusname}
                            onBlur={handleBlursname} 
                            type="password" 
                            id="userPassword" 
                            name="userPassword"
                            className={st.inputAuth}
                            placeholder='password'
                            defaultValue={`${password && password}`}
                        />
                    </div>

                    <div className={`${st.inputWrap}`}>
                        <label htmlFor="userPasswordrepeat"></label>
                        <input 
                            onFocus={handleFocusname} 
                            onBlur={handleBlursname} 
                            type="password" 
                            id="userPasswordrepeat" 
                            name="userPasswordrepeat"
                            className={st.inputAuth}
                            placeholder='passwordrepeat'
                            defaultValue={`${password && password}`}
                        />
                    </div>

                    <button className={st.btnForm}>Save</button>
                 
                </div>
            </form>
            <button className={`${st.btnForm} ${st.lastBtnForm}`}>Exit</button>
        </main>
     );
};
 
export default Profile;