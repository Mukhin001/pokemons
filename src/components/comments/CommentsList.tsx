import { ReactNode, useState } from "react";
import { Comment, useGetCommentsQuery } from "../../api/jsonplaceholder/comments/commentsApi";
import st from './style.module.css';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { increment } from "./likeSlice";
import AddNewComment from "./AddNewComment";
import Select from "../select/Select";

interface Props {
    id: number;
};

const CommentsList = ({ id }: Props) => {
    const theme = useAppSelector(state => state.theme.value);
    const likes = useAppSelector(state => state.likeComment);
    const dispatch = useAppDispatch();
    const { data, isLoading, isError, refetch } = useGetCommentsQuery();
    const comments = data?.slice(0, 100).filter(obj => obj.postId === id);
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

    const sortedComments = (key: string) => {
        switch (key) {
            case 'id-' :
                return (a: Comment, b: Comment) => b.id - a.id;
            case 'id+' :
                return (a: Comment, b: Comment) => a.id - b.id;
        }
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
            <h4>id: {obj.id}</h4>
            
            <div className={st.wrapperEditLikeComment}>
                <h4>postId: {obj.postId}</h4>
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
        </div>
    ));

    return ( 
        <section>
            {/* <AddNewComment postId={ii} /> */}
            <Select name='sortComments' values={['Please choose sort', 'id+', 'id-', 'name', 'email']} keyState={setKeySort}/>
            {content}
        </section>
     );
};
 
export default CommentsList;