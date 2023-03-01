import { ADD_PRODUCT, DECREMENT_PRODUCT, INCREMENT_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

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
