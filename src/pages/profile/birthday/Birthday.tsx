import { useState } from "react";
import Select, { Triangle } from "../../../components/select/Select";
import { SortKey } from "../../../utils/sortUtils/sortUtils";

const arrDay = Array.from({length: 31}, (_, i) => i + 1 + '');
const arrMonth = Array.from({length: 12}, (_, i) => i + 1 + '');
const arrYear = Array.from({length: 31}, (_, i) => i + 1);

const Birthday = () => {
    const [triangle, setTriangle] = useState<Triangle>('down');
    const [keySort, setKeySort] = useState<SortKey>('');
    const [triangleMonth, setTriangleMonth] = useState<Triangle>('down');
    const [keySortMonth, setKeySortMonth] = useState<SortKey>('');

    return ( 
        <section style={{display: 'flex'}}>
             <Select name='Day' triangle={triangle} setTriangle={setTriangle} arrayProps={arrDay} keySort={keySort} setKeySort={setKeySort}/>
             <Select name='Month' triangle={triangleMonth} setTriangle={setTriangleMonth} arrayProps={arrMonth} keySort={keySortMonth} setKeySort={setKeySortMonth}/>
        </section>
     );
};
 
export default Birthday;