import { ADD_PRODUCT, DECREMENT_PRODUCT, INCREMENT_PRODUCT, REMOVE_PRODUCT, RESTORE_FROM_CART } from "./actionTypes";

export const addProduct = (data) => ({ type: ADD_PRODUCT, payload: data });

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  payload: id,
});

export const incrementProduct = (id) => ({
  type: INCREMENT_PRODUCT,
  payload: id,
});

export const decrementProduct = (id) => ({
  type: DECREMENT_PRODUCT,
  payload: id,
});

export const restoreFromCart = (data) => ({
  type: RESTORE_FROM_CART,
  payload: data,
});
