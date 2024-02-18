import { createSlice } from "@reduxjs/toolkit";

const FavourtieUiSlice = createSlice({
    name: "FavourtieUiSlice",
    initialState: { FavouriteIsVisible: false },

    reducers: {
        toggleFav: (state) => {
            state.FavouriteIsVisible = !state.FavouriteIsVisible;
        }
    }
});

export const FavUiActions = FavourtieUiSlice.actions;
export default FavourtieUiSlice;