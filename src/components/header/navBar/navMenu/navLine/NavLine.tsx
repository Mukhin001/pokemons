import Line from '../../../../line/Line';
import st from './style.module.css';

interface Props {
    stripWidth: string;
    stripLeft: string;
    strip: boolean | undefined;
};

const NavLine = ({ stripWidth, stripLeft, strip }: Props) => {
    return ( 
        <Line>
             <div 
                style={
                    {   left: `${stripLeft}`, 
                        width: `${stripWidth}`,
                        visibility: strip ? 'visible' : 'hidden',
                    }} 
                className={st.strip}
            >
            </div>
        </Line>
     );
};
 
export default NavLine;