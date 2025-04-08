import st from './style.module.css';

const citiesArr = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань',
    'Красноярск', 'Нижний Новгород', 'Челябинск', 'Уфа', 'Самара', 'Ростов-на-Дону',
    'Краснодар', 'Омск', 'Воронеж', 'Пермь', 'Волгоград',
];

let cities: string[][] = [];

for(let i = 0; i < citiesArr.length; i+= 4) {
    const arr = citiesArr.slice(i, i + 4);
    cities.push(arr);
};

const ChossingCity = () => {

    return ( 
        <section className={st.container}>
            <div>
                {cities.map((el, i) => 
                    <ul key={'city' + i}>
                        {el.map(e => <li key={e}>{e}</li>)}
                    </ul>
                )}
            </div>
        </section>
     );
};
 
export default ChossingCity;