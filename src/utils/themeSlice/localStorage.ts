import { Theme } from "./themeSlice";

export const loadTheme = (): Theme => {
    if(typeof window !== 'undefined') {
        try {
            const theme = localStorage.getItem('theme');
            if(theme === 'dark' || theme === 'light') {
                return theme;
            }
        } catch(err) {
            console.log('localStorage read error:', err);
        }
    }
    return 'light';
};