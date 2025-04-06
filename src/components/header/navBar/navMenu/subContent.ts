interface NavBarMenuState {
    id: number;
    arr: string[];
    path: string;
    name: string;
    urlMenu: string;
    url: string;
};

export const navBarMenu: NavBarMenuState[] = [
   { name: 'pokemons', urlMenu: 'pokemons', id: 1, url: '', path: '', arr: ['12345', '67890', '11121', '31415', '16171'], },
   { name: 'todolist', urlMenu: 'todolist', id: 2, url: '', path: '', arr: ['abcde', 'fghlj', 'klmno', 'pqrst', 'uvwxyz'], },
   { name: 'words', urlMenu: 'words', id: 3, url: '', path: '', arr: ['i', 'my', 'and', 'people', 'time', 'cheese', 'milk'], },
];