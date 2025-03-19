import { ReactNode, useState } from "react";
import { Comment, useGetCommentsQuery } from "../../api/jsonplaceholder/comments/commentsApi";
import st from './style.module.css';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { increment } from "./likeSlice";
import EditComment from "../editComment/EditComment";
import AddNewComment from "./AddNewComment";

interface Props {
    id: number;
};

const CommentsList = ({ id }: Props) => {
    const [editId, setEditId] = useState<number>(-1);
    const theme = useAppSelector(state => state.theme.value);
    const likes = useAppSelector(state => state.like);
    const dispatch = useAppDispatch();
    const { data, isLoading, isError, refetch } = useGetCommentsQuery();
    const comments = data?.slice().filter(obj => obj.postId === id);
    const [keySort, setKeySort] = useState('empty');
    let ii;

    if(isLoading) {
        return <section>Loading...</section>
    }

    const handleClickLike = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        const wrapperIconLike = e.currentTarget;
        const id: string | undefined = wrapperIconLike?.dataset.id;
        const value: string | undefined = wrapperIconLike?.dataset.num;

        if(id && value) {
            dispatch(increment({id: +id, value: +value, likeClick: true}));
        }
        
    };

    const handleEditComment = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const id = e.currentTarget.dataset.id;
        if(id) {
            setEditId(+id);
        }
    };

    const handleSorted = () => {
        setKeySort('num');
    };

    const sortedComments = (key: string) => {
        if(key === 'num') {
            return (a: Comment, b: Comment) => b.id - a.id;
        }
    };

    const handleWriteComment = () => {

    };

    comments?.map(obj => {
        likes.forEach(o =>  {
            if(o.id === obj.postId) {
               ii = (obj.postId);
                
            }
        })
    });

    const content: ReactNode = (comments?.sort(sortedComments(keySort)).map(obj => 
        <div key={obj.id} className={st.wrapperComment}>
            <h3>{obj.name}</h3>
            <p>{obj.body}</p>
            <em>{obj.email}</em>
            <h4>{obj.id}</h4>
            <h4>{obj.postId}</h4>
            <div className={st.wrapperEditLikeComment}>
                <button onClick={handleEditComment} data-id={obj.id}>Edit</button>
                {likes.map(like => (like.id === obj.id) && 
                    <div    
                        data-num={like.value}
                        data-id={obj.id}
                        key={like.id}
                        className={st.wrapperIconLike}
                        onClick={handleClickLike}
                    >
                        <img 
                            src={like.likeClick ? '/icon/like-click.svg' : `/icon/like-${theme}.svg`}
                            alt="icon-like" 
                            className={st.iconLike}
                            style={like.value ? {transform: 'translateX(-10px)'} : {}}
                        />
                        <span>{like.value > 0 && like.value}</span>
                    </div>
                )}
            </div>
            {editId === obj.id && <EditComment id={obj.id} name={obj.name} body={obj.body} email={obj.email} setEditId={setEditId}/>}
        </div>
    ));

    return ( 
        <section>
            <AddNewComment postId={ii} />
            <button onClick={handleSorted}>sort</button>
            <button onClick={refetch}>rrrr</button>
            <button onClick={handleWriteComment}>sort</button>
            {content}
        </section>
     );
};
 
export default CommentsList;