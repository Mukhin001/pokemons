import { useAppSelector } from "../../app/hooks";
import PostForm from "./postForm/PostForm";
import Modal from "../../components/modal/Modal";
import AuthUser from "../../components/auth/authUser/AuthUser";
import CreateAuth from "../../components/auth/createAuth/CreateAuth";
import { useMemo, useState } from "react";
import st from './posts.module.css';
import Select, { Triangle } from "../../components/select/Select";
import { getSortFn, SortKey } from "../../utils/sortUtils/sortUtils";
import EditPost from "./editPost/EditPost";
import PostsContent from "./postsContent/PostsContent";

const Posts = () => {
    const posts = useAppSelector(state => state.posts);
    const user = useAppSelector(state => state.authUser);
   
    const [modal, setModal] = useState<boolean>(false);
    const [editPost, setEditPost] = useState<null | string>(null);
    const [auth, setAuth] = useState<null | string>(null);
    const [triangle, setTriangle] = useState<Triangle>('down');
    const [keySort, setKeySort] = useState<SortKey>('');
    //console.log('🔄 MyComponent rendered');
    const sorted = useMemo(() => {
        //console.log('⚙️ Sorting inside useMemo');
        return [...posts].sort(getSortFn(keySort));
    }, [posts, keySort]);



    const renderedPosts = sorted.map(post => (
        <article key={post.id} className={st.postWrap}>
            {editPost === post.id ? 
                <EditPost name={post.name} id={post.id} userId={post.userId} title={post.title} content={post.content} setEditPost={setEditPost} />
                :
                <PostsContent  user={user} name={post.name} id={post.id} userId={post.userId} title={post.title} content={post.content} setEditPost={setEditPost} />
            }   
        </article>
    ));

    return ( 
        <section>
            {user.name ? 
                <PostForm /> 
                : 

                <h3 
                    onClick={() => {setAuth('authUser'); setModal(true)}}
                    className={st.authPost}
                >
                    log in to add a post
                </h3>
                
            }
            {modal && 
                <Modal header="AuthPost" setModal={setModal} >
                    {auth === 'authUser' ? <AuthUser setModal={setModal} setAuth={setAuth}/> : auth === 'createAuth' && <CreateAuth setModal={setModal} /> }
                </Modal>
            }
            <h3>Posts</h3>
            <Select triangle={triangle} setTriangle={setTriangle} arrayProps={['Please choose sort', 'id+', 'id-', 'name', 'date']} keySort={keySort} setKeySort={setKeySort}/>
            {renderedPosts}
        </section>
     );
};
 
export default Posts;