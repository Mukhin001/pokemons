import { Link } from "react-router-dom";
import Btn from "../../../components/button/Btn";
import { useAppDispatch } from "../../../app/hooks";
import { postDelete } from "../postsSlice";
import { AuthState } from "../../../components/auth/authUserSlice";

interface Props {
    user: AuthState;
    name: string;
    id: string;
    title: string;
    content: string;
    userId: string;
    setEditPost: React.Dispatch<React.SetStateAction<null | string>>;
};

const PostsContent = ({ user, name, id, title, content, userId, setEditPost }: Props) => {
     const dispatch = useAppDispatch();

    const deletePostFn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        if(e.currentTarget.dataset.btnid){
            dispatch(postDelete(e.currentTarget.dataset.btnid));
        }        
    };

    const openEditPost = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        if(e.currentTarget.dataset.btnid){
            setEditPost(e.currentTarget.dataset.btnid);
        }   
    };

    return ( 
        <article>
            <Link to={title.toLowerCase().replace(' ', '')} >
                <h3 style={{cursor: 'pointer', display: 'inline-block'}}>{title}</h3>
            </Link>
            <p>{content}</p>
            <h4>userName: {name}</h4>
            <h4>userId: {userId}</h4>
            <h4>postId: {id}</h4>
            {userId === user.id + '' && 
                <div style={{display: 'flex', gap: '20px', maxWidth: '300px'}}>
                    <Btn id={id} content="Delete" onclickFn={deletePostFn} />
                    <Btn id={id} content="Edit" onclickFn={openEditPost} />
                </div>
            }
        </article>
    );
};
 
export default PostsContent;