interface WrapperFooter {
    display: string;
    justifyContent?: string;
};

interface WrapperList {
    cursor?: string;
};

export const wrapperWeb: WrapperFooter = {
    display: 'flex',
    justifyContent: 'space-evenly',

};

export const wrapperMob: WrapperFooter = {
    display: 'block',
};

export const wrapperUlInfoWeb: WrapperFooter = {
    display: 'block',
};

export const wrapperUlInfoMob: WrapperFooter = {
    display: 'none'
};

export const wrapperListMob: WrapperList = {
    cursor: 'pointer',
};

export const wrapperListWeb: WrapperList = {
   
};
