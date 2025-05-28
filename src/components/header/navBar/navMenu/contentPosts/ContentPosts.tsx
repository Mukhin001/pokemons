import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../../app/hooks';
import ErrorComponent from '../../../../error/ErrorComponent';
import st from '../contentPoke/style.module.css';
import { ReactNode } from 'react';

interface Props {
    theme: string | null;
    setStrip: React.Dispatch<React.SetStateAction<boolean | undefined>>;
};

const ContentPosts = ({ theme, setStrip }: Props) => {
    const posts = useAppSelector(state => state.posts);

    let renderedPost: ReactNode;

    if(posts.length === 0) {
        renderedPost = (
            <li className={st.headerLi}>
                <ErrorComponent size='Medium' text='posts '/>
            </li>)
    } else {
        renderedPost = (
            posts.map(post => (
                <li 
                    key={post.id}  
                    className={`${st.headerLi} ${theme === 'light' ? `${st.contentLiLight}`: `${st.contentLiDark}`}`}
                >
                    <Link 
                        to={`posts/post-${post.id}`} 
                        style={{cursor: 'pointer', width: '100%'}}
                        onClick={() => setStrip(false)}
                    >{post.title}</Link>
                </li>
            )))
    }

    return ( 
        <section  className={theme === 'light' ? `${st.contentMenuWrapLight}`: `${st.contentMenuWrapDark}`}>
            <div  style={{ paddingBottom: '30px'}}>
                <div className={st.wrapContent}>
                    <ul>
                       {renderedPost}
                    </ul>
                </div>
            </div>
        </section>
     );
};
 
export default ContentPosts;