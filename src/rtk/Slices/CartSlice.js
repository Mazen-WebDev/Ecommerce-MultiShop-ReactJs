import { createSlice } from "@reduxjs/toolkit";

// const CartSlice = createSlice({
//     name: "CartSlice",
//     initialState: [],

//     reducers: {
//         addToCart: (state, action) => {
//             const findProduct = state.find((product) => product.id === action.payload.id);

//             if (findProduct) {
//                 findProduct.quantity++;
//             } else {
//                 const productClone = { ...action.payload, quantity: 1 };
//                 state.push(productClone);
//             }
//         },

//         decreaseQuantity: (state, action) => {
//             const findProduct = state.find((product) => product.id === action.payload.id);

//             if (findProduct.quantity > 1) {
//                 findProduct.quantity--;
//             } else {
//                 return state.filter((product) => product.id !== action.payload.id);
//             }
//         },

//         deleteProduct: (state, action) => {
//             return state.filter((product) => product.id !== action.payload.id);
//         },

//         decreaseQuantity2: (state, action) => {
//             const findProduct = state.find((product) => product.id === action.payload.id);

//             if (findProduct.quantity > 1) {
//                 findProduct.quantity--;
//             } else {
//                 findProduct.quantity = 1;
//             }

//         }
//     }
// });

// export const { addToCart, decreaseQuantity, deleteProduct, decreaseQuantity2 } = CartSlice.actions;
// export default CartSlice.reducer;

const items = localStorage.getItem("cartItems") !== null ? JSON.parse(localStorage.getItem("cartItems")) : [];
const totalAmount = localStorage.getItem("totalAmount") !== null ? JSON.parse(localStorage.getItem("totalAmount")) : 0;
const totalQuantity = localStorage.getItem("totalQuantity") !== null ? JSON.parse(localStorage.getItem("totalQuantity")) : 0;

const setItemFunc = (item, totalAmount, totalQuantity) => {
    localStorage.setItem("cartItems", JSON.stringify(item));
    localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
    localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
}

const initialState = {
    cartItems: items,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount
};

const CartSlice = createSlice({
    name: "CartSlice",
    initialState: initialState,

    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);
            state.totalQuantity++;

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    thumbnail: newItem.thumbnail,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                });
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
            }

            state.totalAmount = state.cartItems.reduce((total, item) => (
                total + Number(item.price) * Number(item.quantity)
            ), 0);

            setItemFunc(state.cartItems.map(item => item), state.totalAmount, state.totalQuantity);
        },

        decreaseProduct: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);
            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id);
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
            }

            state.totalAmount = state.cartItems.reduce((total, item) => (
                total + Number(item.price) * Number(item.quantity)
            ), 0);

            setItemFunc(state.cartItems.map(item => item), state.totalAmount, state.totalQuantity);
        },

        deleteProduct: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);

            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id);
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }

            state.totalAmount = state.cartItems.reduce((total, item) => (
                total + Number(item.price) * Number(item.quantity)
            ), 0);

            setItemFunc(state.cartItems.map(item => item), state.totalAmount, state.totalQuantity);
        }
    }
});

export const cartActions = CartSlice.actions;
export default CartSlice;