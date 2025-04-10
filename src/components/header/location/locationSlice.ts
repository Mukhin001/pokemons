import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
    latitude: number | null;
    longitude: number | null;
    city: string | null;
};

const initialState: LocationState = {
    latitude: null,
    longitude: null,
    city: 'Berlin',
};

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setCoords: ( state, action: PayloadAction<{ latitude: number | null; longitude: number | null}>) => {
            const { latitude, longitude } = action.payload;
            return {
                ...state,
                latitude: latitude,
                longitude: longitude,
            };
        },
        setCity: ( state, action: PayloadAction<string>) => {
            const city = action.payload;
            return {
                ...state,
                city: city,
            };
        },
    },
});

export const { setCoords, setCity } = locationSlice.actions;
export default locationSlice.reducer;