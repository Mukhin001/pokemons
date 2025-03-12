interface NavBarMenuState {
    id: number;
    arr: string[];
    path: string;
    name: string;
    url: string;
};

export const navBarMenu: NavBarMenuState[] = [
   { name: 'numbers', id: 1, url: '', path: '', arr: ['12345', '67890', '11121', '31415', '16171'], },
   { name: 'letters', id: 2, url: '', path: '', arr: ['abcde', 'fghlj', 'klmno', 'pqrst', 'uvwxyz'], },
   { name: 'words', id: 3, url: '', path: '', arr: ['i', 'my', 'and', 'people', 'time', 'cheese', 'milk'], },
];