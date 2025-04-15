import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";

const PostCard = () => {
    const params = useParams();
    const posts = useAppSelector(state => state.posts);
    const postId = posts.find(post => post.title.toLowerCase().replace(' ', '') === params.title);
    
    return ( 
        <article>
            <h3>{postId?.title}</h3>
            <p>{postId?.content}</p>
            <h4>{postId?.userId}</h4>
        </article>
     );
};
 
export default PostCard;