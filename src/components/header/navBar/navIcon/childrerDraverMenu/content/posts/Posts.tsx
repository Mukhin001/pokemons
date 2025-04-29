import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../../../../app/hooks";
import { PropsMobMenu } from "../Content";
import st from '../../style.module.css';
import Btns from "../btns/Btns";

const Posts = ({ nameMenu, setshowDrawer, setnameMenu }: PropsMobMenu) => {
    const posts = useAppSelector(state => state.posts);

    return ( 
        <section>
            <Btns back='back' setName={setnameMenu} name={nameMenu} setshowDrawer={setshowDrawer}/>
            <ul>
                {posts.map(post => 
                    <li key={post.id} className={st.headerLi}>
                        <Link 
                            to={`posts/${post.title.toLowerCase().replace(' ', '')}`} 
                            onClick={() => setshowDrawer(false)}
                        >
                            {post.title}
                        </Link>
                    </li>
                )}
            </ul>

            <div className={st.headerLi}>
                <Link to='/posts' onClick={() => setshowDrawer(false)}>Show all posts</Link>
            </div>
        </section>
    );
};
 
export default Posts;