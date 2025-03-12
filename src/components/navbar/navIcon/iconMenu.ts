interface IconMenuState {
    path: string;
    name: string;
    url: string;
    text: string;
};

export const iconMenu: IconMenuState[] = [
    { path: '/', name: 'home', url: '/icons_menu/home_.svg', text: 'main' },
    { path: '/menu', name: 'menu', url: '/icons_menu/menu_.svg', text: 'menu' },
    { path: '/favorites ', name: 'like', url: '/icons_menu/like_.svg', text: 'favorites ' },
    { path: '/profile', name: 'profile', url: '/icons_menu/user_.svg', text: 'profile' },
];