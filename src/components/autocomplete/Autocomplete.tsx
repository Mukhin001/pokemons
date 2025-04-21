import { ReactNode, useRef, useState } from "react";
import { PokemonsAll } from "../../api/pokemons/pokemonsAll/pokemonsAll";
import st from './style.module.css';
import { useAppSelector } from "../../app/hooks";
import { selectCurrentTheme } from "../../utils/themeSlice/themeSlice";

interface Props {
    dataSort: PokemonsAll[] | undefined;
    headerStyle: boolean;
    setHeaderStyle: React.Dispatch<React.SetStateAction<boolean>>;
    bool: boolean;
    setBool: React.Dispatch<React.SetStateAction<boolean>>;
    getInputValueLength: any;
    inputValue: any;
    setInputValue: React.Dispatch<React.SetStateAction<string | null>>;
};

const Autocompletee = ({ dataSort, headerStyle, setHeaderStyle, bool, setBool, getInputValueLength, inputValue, setInputValue }: Props) => {
    const [showBtnX, setShowBtnX] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const theme = useAppSelector(selectCurrentTheme);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        getInputValueLength(e.target.value);
    };

    const handleClickInput = () => {
        setBool(!bool);
        setHeaderStyle(true);
        if(inputRef.current) inputRef.current.focus();  
    };

    const handleclickLi = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const handleLi = e.currentTarget as HTMLElement;
        setBool(false);
        setShowBtnX(true);
        setInputValue(e.currentTarget.textContent);
        getInputValueLength(handleLi.textContent);
    };

    const handleClickBtnX = () => {
        setInputValue('');
        setShowBtnX(false); 
        if(inputRef.current) inputRef.current.focus();

        getInputValueLength('');    
    };

    const headerInputStyleTop = {
        top: '-30%',
        fontSize: 'x-small',
        padding: '0 5px',
    };

    const headerInputStyleCenter = {
        top: '4%',
    };

    const handleClickBtnShowListPoke = () => {
        setBool(!bool);
        setHeaderStyle(true);
        if(inputRef.current) inputRef.current.focus();  
    };

    let content: ReactNode;

    if(dataSort) {
        content = dataSort?.map(poke => 
            poke.name.includes(inputValue) &&
            <li  data-name='liAutocomplete'
                key={poke.name}
                onClick={handleclickLi}>{poke.name}
            </li>
        )
    }

    return ( 
        <section className={st.autocompletewrapper}>
            <section className={st.inputAndBtnWrapper}>
                <div className={st.inputWrapper}>
                    <input
                        ref={inputRef}
                        data-name='inputAutoComplete'
                        className={`${st.inputAutoComplete}
                            ${theme === 'light' ? `${st.inputAutoCompleteLight}` : `${st.inputAutoCompleteDark}`}`}
                        type="text" 
                        value={inputValue}
                        onChange={handleInput}
                        onClick={handleClickInput}
                    /> 
                    <h3 data-name='headerH3AutoComplete'
                        className={`${st.headerInputAutocomplete}
                            ${theme === 'light' ? `${st.headerInputAutocompleteLight}` : `${st.headerInputAutocompleteDark}`}`}
                        onClick={handleClickInput}
                        style={headerStyle ? headerInputStyleTop : headerInputStyleCenter}
                    >Pokemons</h3>
                </div>
                <div className={st.btnWrapperAutocomplete} data-name='btnWrapperAutocomplete'>
                    <button
                        data-name='btnAutocompleteClose'
                        className={`${st.btnAutocomplete}
                            ${theme === 'light' ? `${st.btnAutocompleteLight}` : `${st.btnAutocompleteDark}`}`}
                        style={showBtnX ? {display: 'block'} : {display: 'none'}} 
                        onClick={handleClickBtnX}>X
                    </button>
                    <button className={`${st.btnAutocomplete}
                            ${theme === 'light' ? `${st.btnAutocompleteLight}` : `${st.btnAutocompleteDark}`}`} 
                            data-name='btn^' onClick={handleClickBtnShowListPoke}>{bool ? '^' : 'v'}
                    </button>
                </div>
            </section>

            <section>
                <ul className={`${st.ulWrapperAutocomplete}
                    ${theme === 'light' ? `${st.ulWrapperAutocompleteLight}` : `${st.ulWrapperAutocompleteDark}`}`} 
                    style={bool ? {display: 'block'} : {display: 'none'}}>
                    {content}
                </ul>
            </section>
        </section>
     );
};
 
export default Autocompletee;



