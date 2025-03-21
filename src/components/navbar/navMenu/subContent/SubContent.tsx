import { navBarMenu } from '../../navBar/navBarMenu';
import st from '../style.module.css';

interface Props {
    subName: string | null;
};

const SubContent = ({ subName }: Props) => {
    return ( 
        <section>
            {navBarMenu.map(obj => obj.name === subName &&
                <div key={obj.name}>
                    {obj.arr.map(elem => 
                        <ul key={elem}>
                            <li>{elem}</li>
                        </ul>
                    )}
                </div>
            )}
        </section>
     );
};
 
export default SubContent;