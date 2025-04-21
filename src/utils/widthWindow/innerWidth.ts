import { Width } from "./widthWindowSlice";

export const innerWidthWindow = (): Width => {
    if(typeof window !== 'undefined') {
        try {
            const width = window.innerWidth > 1100;
            return width;
        } catch(err) {
            console.log('width window read error:', err);
        }
    }
    return true;
};