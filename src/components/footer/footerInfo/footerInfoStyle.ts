interface WrapperFooter {
    display?: string;
    justifyContent?: string;
    opacity?: string;
    transform?: string;
    position?: any;
};

interface WrapperList {
    cursor?: string;
};

export const wrapperWeb: WrapperFooter = {
    display: 'flex',
    justifyContent: 'space-around',
};

export const wrapperMob: WrapperFooter = {
    display: 'block',
};

export const wrapperUlInfoWeb: WrapperFooter = {
    position: 'relative',
};

export const wrapperUlInfoMob: WrapperFooter = {
    position: 'absolute',
};

export const wrapperListMob: WrapperList = {
    cursor: 'pointer',
};

export const wrapperListWeb: WrapperList = {
    
};
