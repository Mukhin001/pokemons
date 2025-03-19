import { useAddNewCommentMutation } from "../../api/jsonplaceholder/comments/commentsApi";

interface AddPostFormFields extends HTMLFormControlsCollection {
    commentName: HTMLInputElement
    commentBody: HTMLTextAreaElement
};

interface AddPostFormElements extends HTMLFormElement {
    readonly elements: AddPostFormFields
};

interface Props {
    postId: any;
   
};

const AddNewComment = ({ postId }: Props) => {
    const [addNewComment, { isLoading }] = useAddNewCommentMutation();

    const handleSubmit = async (e: React.FormEvent<AddPostFormElements>) => {
        e.preventDefault();
        
        const { elements } = e.currentTarget;
        const name = elements.commentName.value;
        const body = elements.commentBody.value;

        const form = e.currentTarget;

        try {
            await addNewComment({ name, body, postId: postId,  email: '@@@@'}).unwrap();
            form.reset();
        } catch (err) {
            console.log('Failed to save the comment:', err);
        }
    };

    return ( 
        <section>
            AddNewComment
            <form onSubmit={handleSubmit}>
                <label htmlFor="commentName">Comment Name:</label>
                <input type="text" id="commentName" defaultValue="" required />
                <label htmlFor="commentBody">Body:</label>
                <textarea
                    id="commentBody"
                    name="commentBody"
                    defaultValue=""
                    required
                />
                <button disabled={isLoading}>Save Comment</button>
            </form>
        </section>
     );
};
 
export default AddNewComment;