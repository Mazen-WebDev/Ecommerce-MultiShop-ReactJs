import { configureStore } from "@reduxjs/toolkit";
import CartUiSlice from "./Slices/CartUiSlice";
import CartSlice from "./Slices/CartSlice";
import FavouriteUiSlice from "./Slices/FavouriteUiSlice";
import FavouriteSlice from "./Slices/FavouriteSlice";

export const Store = configureStore({
    reducer: {
        CartUiSlice: CartUiSlice.reducer,
        CartSlice: CartSlice.reducer,
        FavouriteUiSlice: FavouriteUiSlice.reducer,
        FavouriteSlice: FavouriteSlice.reducer,
    }
});