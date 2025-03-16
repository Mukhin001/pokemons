import { ReactNode } from "react";
import { useGetCommentsQuery } from "../../api/jsonplaceholder/comments/commentsApi";
import st from './style.module.css';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { increment } from "./likeSlice";

interface Props {
    id: number;
};

const CommentsList = ({ id }: Props) => {
    const theme = useAppSelector(state => state.theme.value);
    const like = useAppSelector(state => state.like);
    const dispatch = useAppDispatch();
    const { data, isLoading, isError } = useGetCommentsQuery();
    const comments = data?.slice(0, 100).filter(obj => obj.postId === id);

    if(isLoading) {
        return <section>Loading...</section>
    }

    const handleClickLike = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const id: any = e.currentTarget.dataset.id;
        dispatch(increment(+id))
    };

    const content: ReactNode = (comments?.map(obj => 
        <div key={obj.id} className={st.wrapperComment}>
            <h3>{obj.name}</h3>
            <p>{obj.body}</p>
            <em>{obj.email}</em>
            <div className={st.wrapperEditLikeComment}>
                <button>Edit</button>
                <div className={st.wrapperIconLike}>
                    <img 
                        data-id={obj.id}
                        src={`/icon/like-${theme}.svg`}
                        alt="icon-like" 
                        className={st.iconLike}
                        onClick={handleClickLike}
                    />
                    {like.map(lik => (lik.id === obj.id) && <span key={lik.id}>{lik.value}</span> )}
                </div>
            </div>
        </div>
    ));

    return ( 
        <section>
            {content}
        </section>
     );
};
 
export default CommentsList;