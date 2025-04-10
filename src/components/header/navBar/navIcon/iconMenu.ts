interface IconMenuState {
    path: string;
    name: string;
    url: string;
    text: string;
};

export interface PropsIconMenu {
    theme: string | null;
    likeCount: number;
};

export const iconMenu: IconMenuState[] = [
    { path: '/', name: 'home', url: '/icons_menu/home_.svg', text: 'main' },
    { path: '/menu', name: 'menu', url: '/icons_menu/menu_.svg', text: 'menu' },
    { path: '/favorites ', name: 'like', url: '/icons_menu/like_.svg', text: 'favorites ' },
    { path: '/theme', name: 'theme', url: '/icons_menu/moon.svg', text: 'menu' },
    { path: '/setting', name: 'setting', url: '/icons_menu/setting-.svg', text: 'setting' },
    { path: '/profile', name: 'profile', url: '/icons_menu/user_.svg', text: 'profile' },
];