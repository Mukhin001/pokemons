import { useRef, useState } from 'react';
import st from './drag.module.css';

interface Item {
  id: number;
  text: string;
  top: number;
  left: number;
};

const initialItems: Item[] = [
  { id: 1, text: '🍎 Яблоко', top: 10, left: 0 },
  { id: 2, text: '🍌 Банан', top: 70, left: 0 },
  { id: 3, text: '🍊 Апельсин', top: 130, left: 0 },
  { id: 4, text: '🍇 Виноград', top: 190, left: 0 },
];

const Drag = () => {
    const [items, setItems] = useState<Item[]>(initialItems);

    const mousedownFn = (id: number, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const item = items.find(i => i.id === id);
        if (!item) return;
        

        const shiftX = e.clientX - item.left;
        const shiftY = e.clientY - item.top;
        
        const moveAt = (pageX: number, pageY: number) => {
            
            setItems(prevItem => 
                prevItem.map(elem =>
                    elem.id === id ? 
                        { ...elem, left: pageX - shiftX, top: pageY - shiftY } :
                        elem
                )
            );
        };
        
        const mouseMoveFn = (moveEvent: MouseEvent) => {
            console.log(1);
            
            moveAt(moveEvent.pageX, moveEvent.pageY)
        };

        const mouseUpFn = () => {
            document.removeEventListener('mousemove' , mouseMoveFn);
            document.removeEventListener('mouseup' , mouseUpFn);
        };
                
        document.addEventListener('mousemove' , mouseMoveFn);
        document.addEventListener('mouseup' , mouseUpFn);
    };

    return ( 
        <section style={{marginTop: '300px'}}>
            <h3>Drag</h3>

            <ol 
                className={st.wrapDragUl}
                style={{height: `${(50 * initialItems.length + 20)}px`}}
                >
                {items.map(li => 
                    <li key={li.id} 
                        onMouseDown={(e) => mousedownFn(li.id, e)}
                        className={st.wrapDragLi}                   
                        style={{ left: `${li.left}px`}}
                    >{li.text}</li>
                )}
            </ol>
        </section>
     );
};
 
export default Drag;
