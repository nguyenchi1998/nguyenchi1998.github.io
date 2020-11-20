/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { get, set } from 'utils/storage';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: JSON.parse(get('cart')) || [],
    },
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload;
        },
    },
});

export const { setCart, setCounter } = cartSlice.actions;
export const selectCart = (state) => state.cart.cart;
export const selectProductCart = (state) => state.cart.cart.reduce(
    (sum, cardDetail) => sum + parseInt(cardDetail.number, 10),
    0,
);

export const changeProductToCart = (payload) => (dispatch, getState) => {
    const { id, number, deleteProduct } = payload;
    const { cart } = getState().cart;
    let newCart = [];
    if (deleteProduct) {
        const oldCart = cart;
        newCart = oldCart.filter(el => el.id !== id && el)
    } else
        if (!cart.length)
            newCart = [{ ...payload }];
        else
            if (cart.find(el => el.id === id)) {
                const oldCart = cart;
                newCart = oldCart.map(el => {
                    if (el.id === id) {
                        return {
                            ...el,
                            number: el.number + number
                        }
                    } return el
                });
            }
            else {
                newCart = [...cart, { ...payload }]
            }
    set('cart', JSON.stringify(newCart))
    dispatch(setCart(newCart))
}

export default cartSlice.reducer;
