import st from './btn.module.css';

interface Props {
    id?: string;
    content: string;
    disabled?: boolean;
    width?: string;
    onclickFn?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Btn = ({ id, content, disabled, width, onclickFn }: Props) => {
    return ( 
        <button 
            style={{width: width}} 
            data-btnid={id} 
            onClick={onclickFn} 
            disabled={disabled} 
            className={st.btn}
        >
            {content}
        </button>
    );
};
 
export default Btn;