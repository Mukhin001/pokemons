type SetMistakeUserForm = React.Dispatch<React.SetStateAction<string | null>>;

export const handleFocusInput = (e: React.FocusEvent<HTMLInputElement, Element>, setMistakeUserForm: SetMistakeUserForm) => {
    const input = e.currentTarget;
    const parent = e.currentTarget.parentNode as HTMLDivElement;
    if(parent) {
        parent.style.border = '2px solid #fb7dc4';
    }
    input.style.background = 'rgb(255, 255, 255)';
    setMistakeUserForm(null);
};

export const handleBlurInput = (e: React.FocusEvent<HTMLInputElement, Element>, setMistakeUserForm: SetMistakeUserForm) => {
    const input = e.currentTarget;
    const parent = e.currentTarget.parentNode as HTMLDivElement;
    if(parent) {
        parent.style.border = '2px solid transparent';
    }
    input.style.background = 'gainsboro';
    setMistakeUserForm(null);
};