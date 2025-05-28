export type SortKey = 'name' | 'id-' | 'id+' | '' | 'id-poke' | 'id+poke';

// type SortableItem = {
//     name: string;
//     'id-': string;
//     'id+': string;
// };

export const getSortFn = (key: SortKey) => {
    switch (key) {
        case 'id-' :
            return (a: any, b: any) => +b.id - +a.id;
        case 'id+' :
            return (a: any, b: any) => +a.id - +b.id;
        case 'id-poke' :
            return (a: any, b: any) => +b.url.slice(34, -1) - +a.url.slice(34, -1);
        case 'id+poke' :
            return (a: any, b: any) => +a.url.slice(34, -1) - +b.url.slice(34, -1);
        case 'name' : 
            return (a: any, b: any) => a.name.localeCompare(b.name);
    };
};