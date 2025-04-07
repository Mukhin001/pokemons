import Btns from "../btns/Btns";
import { PropsMobMenu } from "../Content";

const ToDoList = ({ nameMenu, setnameMenu, setshowDrawer}: PropsMobMenu) => {
    return ( 
        <section>
            <Btns back='back' setName={setnameMenu} name='gg' setshowDrawer={setshowDrawer}/>
        </section>
     );
};
 
export default ToDoList;