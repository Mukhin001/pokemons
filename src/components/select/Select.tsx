interface Props {
    name: string;
    values: string[];
    keyState: React.Dispatch<React.SetStateAction<string>>;
};

const Select = ({ name, values, keyState }: Props) => {
    return ( 
        <section>
            {/* <ul>
                {values?.map(value => 
                    <li key={value}>{value}</li>
                )}
            </ul> */}
            <label htmlFor={name}></label>
            <select name={name} id={name} onChange={(e) => keyState(e.target.value)}>
                {values?.map(value => 
                    <option value={value} key={value}>{value}</option>
                )}
            </select>
        </section>
     );
};
 
export default Select;