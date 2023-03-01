import { ADD_TO_CART, INCREMENT_CART, DECREMENT_CART, REMOVE_CART } from "./actionTypes";

export const addToCart = (data) => ({ type: ADD_TO_CART, payload: data });
export const incrementCart = (id) => ({ type: INCREMENT_CART, payload: id });
export const decrementCart = (id) => ({ type: DECREMENT_CART, payload: id });
export const removeCart = (id) => ({ type: REMOVE_CART, payload: id });
