// import { ReactNode, useEffect, useMemo, useState } from "react";
// import st from './style.module.css';
// import { Link } from "react-router-dom";
// import TooltipBadge from "./tooltipBadge/TooltipBadge";
// import { PokemonsAll  } from "../../api/pokemons/pokemonsAll/pokemonsAll";
// import Autocompletee from "../autocomplete/Autocomplete";
// import Loader from "../loader/Loader";
// import ErrorComponent from "../error/ErrorComponent";
// import Select, { Triangle } from "../select/Select";
// import { getSortFn, SortKey } from "../../utils/sortUtils/sortUtils";

// interface Props {
//     pokemons: PokemonsAll[] | undefined;
//     isError: boolean;
//     isLoading: boolean;
// };

// const PokeList = ({ pokemons, isError, isLoading }: Props) => {
//     const [keySort, setKeySort] = useState<SortKey>('');
//     const [headerStyle, setHeaderStyle] = useState<boolean>(false);
//     const [bool, setBool] = useState<boolean>(false);
//     const [inputValueLength, setInputValueLength] = useState<string>('');
//     const [inputValue, setInputValue] = useState<string>('');
//     const [triangle, setTriangle] = useState<Triangle>('down');

//     const mainArticleClick = (e: any) => {
//         if(inputValueLength?.length === 0 && e.target.dataset.name !== 'inputAutoComplete' &&
//             e.target.dataset.name !== 'liAutocomplete' && e.target.dataset.name !== 'btn^' &&
//             e.target.dataset.name !== 'headerH3AutoComplete' && e.target.dataset.name !== 'btnAutocompleteClose'
//         ) {
//             setHeaderStyle(false);
//             setBool(false);
//         }
//     };

//     useEffect(() => {
//         document.body.addEventListener('click', mainArticleClick);
//         return () => {document.body.removeEventListener('click', mainArticleClick)};
//     }, [inputValueLength]);
    
//     const sorted = useMemo(() => {
//        return pokemons?.sort(getSortFn(keySort));
//     }, [pokemons, keySort]);

//     if(isLoading) {
//         return <Loader />
//     }

//     if(isError) {
//         return <ErrorComponent size="Large" />
//     }

//     const content:ReactNode = sorted?.map(obj => {
//             if(obj.name.includes(inputValue)) {
//                 return (
//                     <div 
//                         key={obj.name} 
//                         className={st.pokeListWrapper}
//                         >

//                         <TooltipBadge name={obj.name} classNameProps='wrapLikeImgGreyhidden' />

//                         <div>
//                             <div className={st.wrapImg}>
//                                 <Link to={obj.name}>{obj.name}
//                                     <img src="/pokeball.svg" alt="pokeball" />
//                                 </Link>
//                             </div>
//                             <p>{obj.url.slice(34, -1)}</p>
//                             <p>{obj.name}</p>
//                         </div>
//                     </div>
//                 );
//             }
//             return null;
//     });

//     const getInputValueLength = (length: string) => {
//         setInputValueLength(length || '');
//     };

//     return ( 
//         <main className={st.containerPokeMain}>
//             <section className={st.containerPoke}>
//                 <div className={st.wrapSelect}>
//                     <Select name="Sort Pokemons" triangle={triangle} setTriangle={setTriangle} arrayProps={['Please choose sort', 'id+poke', 'id-poke', 'name']} keySort={keySort} setKeySort={setKeySort} />
//                     <h3>Seach Poke</h3>
//                     <Autocompletee 
//                         pokemons={pokemons}
//                         headerStyle={headerStyle}
//                         setHeaderStyle={setHeaderStyle}
//                         bool={bool}
//                         setBool={setBool}
//                         getInputValueLength={getInputValueLength}
//                         inputValue={inputValue}
//                         setInputValue={setInputValue}
//                     />
//                 </div>
//             </section>
//             <section className={st.containerPoke}>
//                 {content}
//             </section>
//         </main>
//      );
// };
 
// export default PokeList;

import { ReactNode, useEffect, useMemo, useState } from "react";
import st from './style.module.css';
import { Link, useSearchParams } from "react-router-dom";
import TooltipBadge from "./tooltipBadge/TooltipBadge";
import { PokemonsAll } from "../../api/pokemons/pokemonsAll/pokemonsAll";
import Autocompletee from "../autocomplete/Autocomplete";
import Loader from "../loader/Loader";
import ErrorComponent from "../error/ErrorComponent";
import Select, { Triangle } from "../select/Select";
import { getSortFn, SortKey } from "../../utils/sortUtils/sortUtils";

interface Props {
  pokemons: PokemonsAll[] | undefined;
  isError: boolean;
  isLoading: boolean;
};

const ITEMS_PER_PAGE = 20;

const PokeList = ({ pokemons, isError, isLoading }: Props) => {
  const [keySort, setKeySort] = useState<SortKey>('');
  const [headerStyle, setHeaderStyle] = useState<boolean>(false);
  const [bool, setBool] = useState<boolean>(false);
  const [inputValueLength, setInputValueLength] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [triangle, setTriangle] = useState<Triangle>('down');
  const [searchParams, setSearchParams] = useSearchParams();
    const pageParam = parseInt(searchParams.get("page") || "1", 10);
    const currentPage = isNaN(pageParam) ? 1 : pageParam;

  // Обработка кликов вне autocomplete
  const mainArticleClick = (e: any) => {
    if (inputValueLength?.length === 0 &&
      e.target.dataset.name !== 'inputAutoComplete' &&
      e.target.dataset.name !== 'liAutocomplete' &&
      e.target.dataset.name !== 'btn^' &&
      e.target.dataset.name !== 'headerH3AutoComplete' &&
      e.target.dataset.name !== 'btnAutocompleteClose'
    ) {
      setHeaderStyle(false);
      setBool(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', mainArticleClick);
    return () => {
      document.body.removeEventListener('click', mainArticleClick);
    };
  }, [inputValueLength]);

  // Сортировка и фильтрация
  const filteredAndSorted = useMemo(() => {
    if (!pokemons) return [];

    const filtered = pokemons.filter(poke =>
      inputValue.length === 0 || poke.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    return filtered.sort(getSortFn(keySort));
  }, [pokemons, keySort, inputValue]);

  // Вычисление страниц
  const totalPages = Math.ceil(filteredAndSorted.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredAndSorted.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
    setSearchParams({ page: newPage.toString() });
  }
  };

  if (isLoading) return <Loader />;
  if (isError) return <ErrorComponent size="Large" />;

  const content: ReactNode = currentItems.map(obj => (
    <div key={obj.name} className={st.pokeListWrapper}>
      <TooltipBadge name={obj.name} classNameProps='wrapLikeImgGreyhidden' />
      <div>
        <div className={st.wrapImg}>
          <Link to={obj.name}>
            {obj.name}
            <img src="/pokeball.svg" alt="pokeball" />
          </Link>
        </div>
        <p>{obj.url.slice(34, -1)}</p>
        <p>{obj.name}</p>
      </div>
    </div>
  ));

  const getInputValueLength = (length: string) => {
    setInputValueLength(length);
    setSearchParams({ page: "1" }); // Сброс страницы при вводе
  };

  return (
    <main className={st.containerPokeMain}>
      <section className={st.containerPoke}>
        <div className={st.wrapSelect}>
          <Select
            name="Sort Pokemons"
            triangle={triangle}
            setTriangle={setTriangle}
            arrayProps={['Please choose sort', 'id+poke', 'id-poke', 'name']}
            keySort={keySort}
            setKeySort={setKeySort}
          />
          <h3>Search Poke</h3>
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

      {/* Пагинация */}
      <section className={st.paginationSection}>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>
          Назад
        </button>
        <span className={st.paginationText}>
          Страница {currentPage} из {totalPages}
        </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
          Далее
        </button>
      </section>
    </main>
  );
};

export default PokeList;
