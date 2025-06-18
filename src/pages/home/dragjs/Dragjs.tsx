import st from './dragjs.module.css';

const Dragjs = () => {
    var deltaX: any;
    var deltaY: any;
    var move = document.getElementById("move");

    function getMouse(e: any){
        if(move) {
            move.style.left = (e.pageX - deltaX) + "px";
            move.style.top = (e.pageY - deltaY) + "px";
            console.log()
            if(move.offsetLeft >= 700){
                    move.style.left = 699 + "px";
            }
            if(move.offsetTop <= 200 || move.offsetTop >= 202){
                move.style.top = 201 + "px";
            }
        }
    };

    function onMouseDownFn(e: any){
        if(move) {
            deltaX = e.pageX - move.offsetLeft;
            deltaY = e.pageY - move.offsetTop;
        }
        
        window.addEventListener('mousemove', getMouse);
    };

    function onMouseUpfn(){
        window.removeEventListener('mousemove', getMouse);
    };
    
    document.onmouseup = function(){
        window.removeEventListener('mousemove', getMouse);
    };

    return ( 
        <section>
            <div id="divStyle" className={st.divStyle}>
                <div 
                    className={st.move}
                    onMouseDown={onMouseDownFn}
                    onMouseUp={onMouseUpfn}
                    id="move"
                >
                </div>
            </div>
        </section>
     );
};
 
export default Dragjs;