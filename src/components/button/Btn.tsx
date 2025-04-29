import st from './btn.module.css';

interface Props {
    id?: string;
    content: string;
    onclickFn?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Btn = ({ id, content, onclickFn }: Props) => {
    return ( 
        <button data-btnid={id} onClick={onclickFn} className={st.btn}>{content}</button>
    );
};
 
export default Btn;