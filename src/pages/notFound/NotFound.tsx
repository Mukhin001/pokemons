import { Link } from "react-router-dom";
import Btn from "../../components/button/Btn";

interface Props {
    content?: string;
};

const NotFound = ({ content }: Props) => {
    return ( 
        <section style={{display: 'inline-block'}}>
            Not Found Page {content}
                <Link to='/'><Btn content="Home"></Btn></Link>
        </section>
     );
};
 
export default NotFound;