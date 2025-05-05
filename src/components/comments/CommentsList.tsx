import { ReactNode, useMemo, useState } from "react";
import { useGetCommentsQuery } from "../../api/jsonplaceholder/comments/commentsApi";
import st from './style.module.css';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { increment } from "./likeSlice";
import Loader from "../loader/Loader";
import ErrorComponent from "../error/ErrorComponent";
import { selectCurrentTheme } from "../../utils/themeSlice/themeSlice";
import Select, { Triangle } from "../select/Select";
import { getSortFn, SortKey } from "../../utils/sortUtils/sortUtils";


interface Props {
    id: number;
};

const CommentsList = ({ id }: Props) => {
    const theme = useAppSelector(selectCurrentTheme);
    const likes = useAppSelector(state => state.likeComment);
    const dispatch = useAppDispatch();
    const { data, isLoading, isError } = useGetCommentsQuery();
    const comments = data?.slice().filter(obj => obj.postId === id);
    const [keySort, setKeySort] = useState<SortKey>('');
    const [triangle, setTriangle] = useState<Triangle>('down');

    const sorted = useMemo(() => {
        return comments?.sort(getSortFn(keySort));
    }, [comments, keySort]);

    if(isLoading) {
        return <Loader />
    }     
    if(isError) {
        return <ErrorComponent size="Large" display="Grid" />
    }
        
    const handleClickLike = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        const wrapperIconLike = e.currentTarget;
        const id: string | undefined = wrapperIconLike?.dataset.id;
        const value: string | undefined = wrapperIconLike?.dataset.num;

        if(id && value) {
            dispatch(increment({id: +id, value: +value, likeClick: true}));
        }
    };

    // const sortedComments = (key: string) => {
    //     switch (key) {
    //         case 'id-' :
    //             return (a: Comment, b: Comment) => b.id - a.id;
    //         case 'id+' :
    //             return (a: Comment, b: Comment) => a.id - b.id;
    //         case 'name' :
    //             return (a: any, b: any) => a.name.localeCompare(b.name);
    //     }
    // };

    const content: ReactNode = (sorted?.map(obj => 
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
            {/* <Select triangle={triangle} setTriangle={setTriangle} arrayProps={['Please choose sort', 'id+', 'id-', 'name', 'email']} keySort={keySort} setKeySort={setKeySort}/> */}
            <Select name="comment sort"
                triangle={triangle} setTriangle={setTriangle} 
                arrayProps={[ 'id+', 'id-', 'name', 'email']}
                keySort={keySort} setKeySort={setKeySort}
            />
            {content}
        </section>
     );
};
 
export default CommentsList;