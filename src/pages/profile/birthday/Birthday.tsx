import { useState } from "react";
import Select, { Triangle } from "../../../components/select/Select";
import { SortKey } from "../../../utils/sortUtils/sortUtils";

const today = new Date();
const arrDay = Array.from({length: 31}, (_, i) => i + 1 + '');
const arrMonth = Array.from({length: 12}, (_, i) => i + 1 + '');
const arrYear = Array.from({length: 60}, (_, i) => today.getFullYear() - 10 - i + '');

const Birthday = () => {
    const [triangle, setTriangle] = useState<Triangle>('down');
    const [keySort, setKeySort] = useState<SortKey>('');
    const [triangleMonth, setTriangleMonth] = useState<Triangle>('down');
    const [keySortMonth, setKeySortMonth] = useState<SortKey>('');
    const [triangleYear, setTriangleYear] = useState<Triangle>('down');
    const [keySortYear, setKeySortYear] = useState<SortKey>('');

    return ( 
        <section style={{display: 'flex', justifyContent: 'space-between'}}>
          <h3>Birthday</h3>
          <div style={{display: 'flex', gap: '5px'}}>
               <Select name='Day' triangle={triangle} setTriangle={setTriangle} arrayProps={arrDay} keySort={keySort} setKeySort={setKeySort}/>
               <Select name='Month' triangle={triangleMonth} setTriangle={setTriangleMonth} arrayProps={arrMonth} keySort={keySortMonth} setKeySort={setKeySortMonth}/>
               <Select name='Year' triangle={triangleYear} setTriangle={setTriangleYear} arrayProps={arrYear} keySort={keySortYear} setKeySort={setKeySortYear}/>
          </div>
        </section>
     );
};
 
export default Birthday;