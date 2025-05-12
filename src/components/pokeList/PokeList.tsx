import { ReactNode, useEffect, useMemo, useState } from "react";
import st from './style.module.css';
import tooltipSt from '../tooltip/style.module.css';
import { Link, useSearchParams } from "react-router-dom";
import TooltipBadge from "./tooltipBadge/TooltipBadge";
import { PokemonsAll  } from "../../api/pokemons/pokemonsAll/pokemonsAll";
import Autocompletee from "../autocomplete/Autocomplete";
import Loader from "../loader/Loader";
import ErrorComponent from "../error/ErrorComponent";
import Select, { Triangle } from "../select/Select";
import { getSortFn, SortKey } from "../../utils/sortUtils/sortUtils";
import Btn from "../button/Btn";
import Tooltip from "../tooltip/Tooltip";

interface Props {
    pokemons: PokemonsAll[] | undefined;
    isError: boolean;
    isLoading: boolean;
};

const itemsPerPage: number = 20;

const PokeList = ({ pokemons, isError, isLoading }: Props) => {
    const [keySort, setKeySort] = useState<SortKey>('name');
    const [headerStyle, setHeaderStyle] = useState<boolean>(false);
    const [bool, setBool] = useState<boolean>(false);
    const [inputValueLength, setInputValueLength] = useState<string>('');
    const [inputValue, setInputValue] = useState<string>('');
    const [triangle, setTriangle] = useState<Triangle>('down');
    const [searchParams, setSearchParams] = useSearchParams();
    const pageParam = parseInt(searchParams.get('pagePokemons') || '1', 10);
    const currentPage = Number.isNaN(pageParam) ? 1 : pageParam;

    const mainArticleClick = (e: any) => {
        if(inputValueLength?.length === 0 && e.target.dataset.name !== 'inputAutoComplete' &&
            e.target.dataset.name !== 'liAutocomplete' && e.target.dataset.name !== 'btn^' &&
            e.target.dataset.name !== 'headerH3AutoComplete' && e.target.dataset.name !== 'btnAutocompleteClose'
        ) {
            setHeaderStyle(false);
            setBool(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener('click', mainArticleClick);
        return () => {document.body.removeEventListener('click', mainArticleClick)};
    }, [inputValueLength]);
    
    const sorted = useMemo(() => {
        if(!pokemons) return [];

        return pokemons?.sort(getSortFn(keySort));
    }, [pokemons, keySort]);

    if(isLoading) return <Loader />
    if(isError) return <ErrorComponent size="Large" />

    // Вычисление страниц
    const totalPages = Math.ceil(sorted.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = sorted.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setSearchParams({ pagePokemons: newPage.toString() });
            window.scrollTo(0, 0);
        }
    };

    const content:ReactNode = currentItems?.map(obj => {
            if(obj.name.includes(inputValue)) {
                return (
                    <div 
                        key={obj.name} 
                        className={st.pokeListWrapper}
                        >

                        <TooltipBadge name={obj.name} classNameProps='wrapLikeImgGreyhidden' />

                        <div>
                            <div className={st.wrapImg}>
                                <Link to={obj.name}>{obj.name}
                                    <img src="/pokeball.svg" alt="pokeball" />
                                </Link>
                            </div>
                            <p>{obj.url.slice(34, -1)}</p>
                            <p>{obj.name}</p>
                        </div>
                    </div>
                );
            }
            return null;
    });

    const getInputValueLength = (length: string) => {
        setInputValueLength(length || '');
        setSearchParams({ pagePokemons: "1" }); // Сброс страницы при вводе
    };

    return ( 
        <main className={st.containerPokeMain}>
            <section className={st.containerPoke}>
                <div className={st.wrapSelect}>
                    <Select name="Sort Pokemons" triangle={triangle} setTriangle={setTriangle} arrayProps={['Please choose sort', 'id+poke', 'id-poke', 'name']} keySort={keySort} setKeySort={setKeySort} />
                    <h3>Seach Poke</h3>
                    <Autocompletee 
                        pokemons={pokemons}
                        headerStyle={headerStyle}
                        setHeaderStyle={setHeaderStyle}
                        bool={bool}
                        setBool={setBool}
                        getInputValueLength={getInputValueLength}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                    />
                </div>
            </section>
            <section className={st.containerPoke}>
                {content}
            </section>
             
            <section className={st.paginationSection}>
                <div className={tooltipSt.wrapPageBtns} >
                    <Btn onclickFn={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1} content="Back" width="auto"/>
                    {currentPage <= 1 && <Tooltip nameStyle="PageEnd"><p>The First Page</p></Tooltip>}
                </div>
                <span className={st.paginationText}>
                    Page {currentPage} from {totalPages}
                </span>
                <div className={tooltipSt.wrapPageBtns}>
                    <Btn onclickFn={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages} content="Next" width="auto"/>
                    {currentPage >= totalPages && <Tooltip nameStyle="PageEnd"><p>Last Page</p></Tooltip>}
                </div>
            </section>

        </main>
     );
};
 
export default PokeList;

