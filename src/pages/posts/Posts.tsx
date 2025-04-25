import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PostForm from "./postForm/PostForm";
import Modal from "../../components/modal/Modal";
import AuthUser from "../../components/auth/authUser/AuthUser";
import CreateAuth from "../../components/auth/createAuth/CreateAuth";
import { useMemo, useState } from "react";
import st from './posts.module.css';
import Select, { Triangle } from "../../components/select/Select";
import { getSortFn, SortKey } from "../../utils/sortUtils/sortUtils";
import Btn from "../../components/button/Btn";
import { postDelete } from "./postsSlice";

const Posts = () => {
    const posts = useAppSelector(state => state.posts);
    const user = useAppSelector(state => state.authUser);
    const dispatch = useAppDispatch();
    const [modal, setModal] = useState<boolean>(false);
    const [auth, setAuth] = useState<null | string>(null);
    const [triangle, setTriangle] = useState<Triangle>('down');
    const [keySort, setKeySort] = useState<SortKey>('');
    //console.log('🔄 MyComponent rendered');
    const sorted = useMemo(() => {
        //console.log('⚙️ Sorting inside useMemo');
        return [...posts].sort(getSortFn(keySort));
    }, [posts, keySort]);

    const deletePostFn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        if(e.currentTarget.dataset.btnid){
            dispatch(postDelete(e.currentTarget.dataset.btnid));
        }        
    };

    const renderedPosts = sorted.map(post => (
        <article key={post.id} className={st.postWrap}>
            <Link to={post.title.toLowerCase().replace(' ', '')} style={{cursor: 'pointer'}}>
                <h3>{post.title}</h3>
            </Link>
            <p>{post.content}</p>
            <h4>{post.userId}</h4>
            {post.userId === user.id + '' && 
                <div style={{display: 'flex', gap: '20px'}}>
                    <Btn id={post.id} content="Delete" onclickFn={deletePostFn}/>
                    <Btn content="Edit" />
                </div>
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