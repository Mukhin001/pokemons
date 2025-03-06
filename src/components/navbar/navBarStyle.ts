interface NavStyle {
    position?: any;
    bottom?: string;
    justifyContent?: string;
    left?: string;
    right?: string;
};

export const navMob: NavStyle = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    justifyContent: 'space-between',
};

export const navWeb: NavStyle = {
    justifyContent: 'flex-end',
};