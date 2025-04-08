import ErrorComponent from "../../../../../../error/ErrorComponent";
import Btns from "../btns/Btns";
import { PropsMobMenu } from "../Content";

const ToDoList = ({ nameMenu, setnameMenu, setshowDrawer}: PropsMobMenu) => {
    return ( 
        <section>
            <Btns back='back' setName={setnameMenu} name='To Do List' setshowDrawer={setshowDrawer}/>
            <ErrorComponent shadowLittle={true} />
        </section>
     );
};
 
export default ToDoList;