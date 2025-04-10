import ErrorComponent from "../../../../../../error/ErrorComponent";
import Btns from "../btns/Btns";
import { PropsMobMenu } from "../Content";

const ToDoList = ({ setnameMenu, setshowDrawer}: PropsMobMenu) => {
    return ( 
        <section>
            <Btns back='back' setName={setnameMenu} name='To Do List' setshowDrawer={setshowDrawer}/>
            <ErrorComponent size="Medium" />
        </section>
     );
};
 
export default ToDoList;