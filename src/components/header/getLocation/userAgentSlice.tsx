import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserAgent {
    device: string | null | undefined;
    oc: string | null | undefined;
    browser: string | null | undefined;
    language: string | null;
};

const initialState: UserAgent = {
    device: null,
    oc: null,
    browser: null,
    language: 'en',
};

export const userAgentSlice = createSlice({
    name: 'userAgent',
    initialState,
    reducers: {
        setUserAgent: ( state, actions: PayloadAction<UserAgent> ) => {
            const { device, oc, browser, language } = actions.payload;

            return {
                device,
                oc,
                browser,
                language,
            }
        },
    },
});

export const { setUserAgent } = userAgentSlice.actions;
export default userAgentSlice.reducer;