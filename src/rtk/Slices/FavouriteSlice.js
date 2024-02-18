import { createSlice } from "@reduxjs/toolkit";

// const FavouriteSlice = createSlice({
//     name: "FavouriteSlice",
//     initialState: [],

//     reducers: {
//         addToFav: (state, action) => {
//             const findProduct = state.find((product) => product.id === action.payload.id);

//             if (findProduct) {
//                 return state.filter(product => product.id !== action.payload.id);
//             } else {
//                 const productClone = { ...action.payload };
//                 state.push(productClone);
//             }
//         },

//         deleteFav: (state, action) => {
//             return state.filter(product => product.id !== action.payload.id);
//         }
//     }
// });

// export const { addToFav, deleteFav } = FavouriteSlice.actions;
// export default FavouriteSlice.reducer;

const items2 = localStorage.getItem("favItems") !== null ? JSON.parse(localStorage.getItem("favItems")) : [];
const totalQuantity2 = localStorage.getItem("totalQuantity2") !== null ? JSON.parse(localStorage.getItem("totalQuantity2")) : 0;

const setItemFunc = (item, totalQuantity) => {
    localStorage.setItem("favItems", JSON.stringify(item));
    localStorage.setItem("totalQuantity2", JSON.stringify(totalQuantity));
}

const initialState = {
    favItems: items2,
    totalQuantity: totalQuantity2
}

const FavouriteSlice = createSlice({
    name: "FavouriteSlice",
    initialState: initialState,

    reducers: {
        addToFav: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.favItems.find(state => state.id === newItem.id);

            if (!existingItem) {
                state.favItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    thumbnail: newItem.thumbnail,
                    price: newItem.price,
                    quantity: 1
                })
                state.totalQuantity++;
            }
            else {
                state.favItems = state.favItems.filter(item => item.id !== existingItem.id);
                state.totalQuantity--;
            }

            setItemFunc(state.favItems.map(item => item), state.totalQuantity);
        },

        deleteFav: (state, action) => {
            const id = action.payload;
            const existingItem = state.favItems.find(item => item.id === id);

            if (existingItem) {
                state.favItems = state.favItems.filter(item => item.id !== id);
                state.totalQuantity--;
            }

            setItemFunc(state.favItems.map(item => item), state.totalQuantity);
        }
    }
});

export const FavouriteActions = FavouriteSlice.actions;
export default FavouriteSlice;