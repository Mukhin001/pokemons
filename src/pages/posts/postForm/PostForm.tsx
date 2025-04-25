import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import Input from "../../../components/input/Input"
import Tooltip from "../../../components/tooltip/Tooltip"
import st from '../../../components/auth/authUser/style.module.css';
import { Post, postAdded } from "../postsSlice";

interface AddPostFormFields extends HTMLFormControlsCollection {
    postTitle: HTMLInputElement
    postContent: HTMLTextAreaElement
    postAuthor: HTMLSelectElement
};

interface AddPostFormElements extends HTMLFormElement {
    readonly elements: AddPostFormFields
};


const PostForm = () => {
    const dispatch = useAppDispatch();
    const [mistakeUserForm, setMistakeUserForm] = useState<string | null>(null);
    const user = useAppSelector(state => state.authUser);

    const handleSubmit = (e: React.FormEvent<AddPostFormElements>) => {
        e.preventDefault();
        
        const { elements } = e.currentTarget;
        const title = elements.postTitle.value;
        const content = elements.postContent.value;

        if(title.length === 0 || content.length === 0) {
            setMistakeUserForm('fill in the form');
            return;
        }

        if(user.name && user.id) {
            const post: Post = {
                title,
                content,
                date: '2007ss',
                userId: user.id + '',
                name: user.name,
            };
    
            dispatch(postAdded(post));
        }

        e.currentTarget.reset();
    };

    return ( 
        <section>
            <form onSubmit={handleSubmit}>
                <div className={st.wrapAccount} style={{position: 'relative'}}>
                    <h3>Add a New Post</h3>
                    {mistakeUserForm &&
                        <Tooltip nameStyle='CraeteAuth'>
                            <h3>{mistakeUserForm}</h3>
                        </Tooltip>
                    }
                    <Input name='postTitle' type='text' placeholder='postTitle' setMistakeUserForm={setMistakeUserForm} />
                    <Input name='postContent' type='text' placeholder='postContent' setMistakeUserForm={setMistakeUserForm} />
                    <button className={st.btnForm}>Save Post</button>
                </div>
            </form>
        </section>
     );
}
 
export default PostForm;