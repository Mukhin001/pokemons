import { ReactNode } from "react";
import st from './style.module.css';

interface Props {
    name?: string;
    children: ReactNode;
    nameStyle: string;
};

const Tooltip = ({ name, children, nameStyle }: Props) => {
    
    return ( 
        <section data-name={name}
            className={`${st[`container${nameStyle}`]} ${st.containerTooltip}`}>
            {children}
        </section>
     );
};
 
export default Tooltip;