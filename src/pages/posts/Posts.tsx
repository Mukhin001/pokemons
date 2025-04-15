import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import PostForm from "./postForm/PostForm";

const Posts = () => {
    const posts = useAppSelector(state => state.posts);
    const postsCopy = posts.slice();

    const renderedPosts = postsCopy.map(post => (
        <article key={post.id}>
            <Link to={post.title.toLowerCase().replace(' ', '')} style={{cursor: 'pointer'}}>
                <h3>{post.title}</h3>
            </Link>
            <p>{post.content}</p>
            <h4>{post.userId}</h4>
        </article>
    ))

    return ( 
        <section>
            <PostForm />
            <h3>Posts</h3>
            {renderedPosts}
        </section>
     );
};
 
export default Posts;