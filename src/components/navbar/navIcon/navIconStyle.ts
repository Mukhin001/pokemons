interface NavStyle {
    position?: any;
    bottom?: string;
    justifyContent?: string;
    left?: string;
    right?: string;
    zIndex?: string;
};

export const navMob: NavStyle = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    justifyContent: 'space-between',
    zIndex: '5',
};

export const navWeb: NavStyle = {
    justifyContent: 'flex-end',
};