import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import Btn from "../../../components/button/Btn";
import { postDelete } from "../postsSlice";
import { useState } from "react";
import EditPost from "../editPost/EditPost";

const PostCard = () => {
    const user = useAppSelector(state => state.authUser);
    const dispatch = useAppDispatch();
    const params = useParams();
    const posts = useAppSelector(state => state.posts);
    const postId = posts.find(post => post.id === params.title?.slice(params.title.indexOf('-') + 1));
    // const postId = posts.find(post => post.title.toLowerCase().replace(' ', '') === params.title);
    const [editPost, setEditPost] = useState<null | string>(null);
    
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

    const editForm = posts.find(post => post.id === editPost);
    console.log(params.title?.slice(params.title.indexOf('-') + 1));
    
    return ( 
        <article>
                {editPost === editForm?.id ? 
                    <EditPost name={editForm.name} id={editForm.id} userId={editForm.userId} title={editForm.title} content={editForm.content} setEditPost={setEditPost} />
                    :
                    <div>
                        <h3>{postId?.title}</h3>
                        <p>{postId?.content}</p>
                        <h4>{postId?.userId}</h4>
                        {postId?.userId === user.id + '' && 
                            <div style={{display: 'flex', gap: '20px', maxWidth: '300px'}}>
                                <Btn id={postId?.id} content="Delete" onclickFn={deletePostFn} />
                                <Btn id={postId?.id} content="Edit" onclickFn={openEditPost} />
                            </div>
                        } 
                    </div>
                }
        </article>
     );
};
 
export default PostCard;