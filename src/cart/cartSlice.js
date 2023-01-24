import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    total: 0,
    cantTotal: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemStore: (state, action) => {
            let { item, quantity } = action.payload;

            let productAdded = { item, quantity }

            const producto = state.cart.find(item => item.item.id === action.payload.item.id);
            if (producto !== undefined) {
                let index = state.cart.indexOf(producto);
                state.cart[index].quantity = state.cart[index].quantity + quantity;

            } else {
                state.cart.push(productAdded)
            }
            state.total = (state.total + (item.price * quantity));
            state.cantTotal = (state.cantTotal + quantity);

        },
        clearStore: (state) => {
            state.cart = [];
            state.total = 0;
            state.cantTotal = 0;
        },
        removeItemStore: (state, action) => {
            console.log("A BORRAR", action.payload);
            let item = action.payload
            console.log("EL ITEM", item);
            const producto = state.cart.find(product => product.item.id === item.id)
            state.total = state.total - (producto.item.price * producto.quantity);
            state.cantTotal = state.cantTotal - producto.quantity;
            state.cart = state.cart.filter((product) => product.item.id !== item.id);
        },
        editCartStore: (state, action) => {
            let { item, quantity } = action.payload;
            let cartProduct = state.cart.find(producto => producto.item.id === item.id);
            let totalEnd = cartProduct.quantity - quantity;
            let index = state.cart.indexOf(cartProduct);
            state.cart[index].quantity = quantity
            state.total = state.total - (cartProduct.item.price * totalEnd);
            state.cantTotal = (state.cantTotal - totalEnd);

        }
    },
})

export const { addItemStore, clearStore, removeItemStore, editCartStore } = cartSlice.actions

export default cartSlice.reducer