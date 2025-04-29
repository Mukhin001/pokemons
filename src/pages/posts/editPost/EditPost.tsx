import { useState } from 'react';
import Input from '../../../components/input/Input';
import st from '../../../components/auth/authUser/style.module.css';
import Btn from '../../../components/button/Btn';
import { saveEditedPost } from '../postsSlice';
import { useAppDispatch } from '../../../app/hooks';
import Tooltip from '../../../components/tooltip/Tooltip';

interface AddPostFormFields extends HTMLFormControlsCollection {
    postTitle: HTMLInputElement
    postContent: HTMLTextAreaElement
    postAuthor: HTMLSelectElement
};

interface AddPostFormElements extends HTMLFormElement {
    readonly elements: AddPostFormFields
};


interface Props {
    name: string;
    id: string;
    title: string;
    content: string;
    userId: string;
    setEditPost: React.Dispatch<React.SetStateAction<null | string>>;
};

const EditPost = ({ name, id, userId, title, content, setEditPost }: Props) => {
    const [mistakeUserForm, setMistakeUserForm] = useState<string | null>(null);
    const dispatch = useAppDispatch();

    const saveEditedPostFn = (e: React.FormEvent<AddPostFormElements>) => {
        e.preventDefault();

        const { elements } = e.currentTarget;
        const newTitle = elements.postTitle.value;
        const newContent = elements.postContent.value;

        if(newTitle.length === 0 || newContent.length === 0) {
            setMistakeUserForm('fill in the form');
            return;
        }

        const newPost = {
            name,
            id,
            userId,
            title: newTitle,
            content: newContent,
            date: '2009',
        };
        dispatch(saveEditedPost(newPost) );
        setEditPost(null);
    };

    return ( 
        <section>
            <form onSubmit={saveEditedPostFn}>
                <div className={st.wrapAccount} style={{position: 'relative'}}>
                    {mistakeUserForm &&
                        <Tooltip nameStyle='CraeteAuth'>
                            <h3>{mistakeUserForm}</h3>
                        </Tooltip>
                    }
                    <Input name='postTitle' type='text' placeholder='postTitle' value={content} setMistakeUserForm={setMistakeUserForm} />
                    <Input name='postContent' type='text' placeholder='postContent' value={title} setMistakeUserForm={setMistakeUserForm} />
                    <Btn content='Save Post'/>
                </div>
            </form>
        </section>
     );
};
 
export default EditPost;