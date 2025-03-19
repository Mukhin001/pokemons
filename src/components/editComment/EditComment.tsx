import st from './style.module.css';

interface EditCommentFormFields extends HTMLFormControlsCollection {
    username: HTMLInputElement,
    body: HTMLInputElement,
    email: HTMLInputElement,
};

interface EditCommentFormElements extends HTMLFormElement {
    readonly elements: EditCommentFormFields,
};

interface Props {
    id: number;
    name: string;
    email: string;
    body: string;
    setEditId: React.Dispatch<React.SetStateAction<number>>;
};

const EditComment = ({ id, name, email, body, setEditId }: Props) => {

    const handleSaveComment = (e: React.FormEvent<EditCommentFormElements>) => {
        e.preventDefault();
        setEditId(-1);
        const { elements }  = e.currentTarget;
        const newId = e.currentTarget.dataset.id;
        const newName = elements.username.value
        const newBody = elements.body.value
        const newEmail = elements.email.value
        
       return { id: newId, name: newName,  }
    };

    const handleCloseComment = ( e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setEditId(-1);
    };

    return ( 
        <section>
            <form 
                onSubmit={handleSaveComment}
                className={st.form}
                data-id={id}
            >
                <input name='username' type="text" defaultValue={name}/>
                <input name='body' type="text" defaultValue={body}/>
                <input name='email' type="text" defaultValue={email}/>
                <button>Save</button>
            </form>
            <button onClick={handleCloseComment}>close</button>
        </section>
     );
};
 
export default EditComment;