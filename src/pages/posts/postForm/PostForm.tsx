import { useAppDispatch } from "../../../app/hooks"

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

    const handleSubmit = (e: React.FormEvent<AddPostFormElements>) => {
        e.preventDefault();
        
        const { elements } = e.currentTarget;
        const title = elements.postTitle.value;
        const content = elements.postContent.value;

        // dispatch(postAdded(title, content, userId!));

        e.currentTarget.reset();
    };
    return ( 
        <section>
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Post Title:</label>
                <input type="text" id="postTitle" defaultValue='' />
                <label htmlFor="postContent">Content:</label>
                <textarea 
                    name="postContent" 
                    id="postContent"
                    defaultValue=''
                />
                <button>Save Post</button>
            </form>
        </section>
     );
}
 
export default PostForm;