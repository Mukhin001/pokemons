import { useNavigate, useParams } from "react-router-dom";
import { items } from "../PokeList";
import st from './style.module.css';
import CommentsList from "../../comments/CommentsList";

interface PokeObj {
    id: number;
    name: string;
    imgUrl: string;
    alt: string;
    description: string;
};

const PokeCard = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const content: PokeObj | undefined  = items.find(obj => obj.name === name);
    const goBack = (): void | Promise<void>  => navigate(-1);

    return ( 
        <section>
            {content && 
                <div>
                    <button onClick={goBack}>Go back!</button>
                    <div className={st.wrapImg}>
                        <img src={'/' + content.imgUrl} alt={content.alt} />
                    </div>
                    <h3>{content.name}</h3>
                    <CommentsList id={content.id}/>
                </div>
            }
        </section>
     );
};
 
export default PokeCard;