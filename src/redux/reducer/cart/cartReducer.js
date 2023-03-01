import { initialState } from "./initialState";
import { ADD_TO_CART, INCREMENT_CART, DECREMENT_CART, REMOVE_CART } from "./actionTypes";

const addQuantity = (arr, id) => arr.map(e => {
  if (e.id === id) e.quantity = e.quantity + 1;
  return { ...e };
})

const compare = (arr, id) => arr.reduce((acc, crnt) => acc = crnt.id === id ? true : false, false)

const addCartInitial = list => ({ ...list, quantity: 1 });

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.length > 0) {
        if (compare(state, action.payload.id)) {
          // add quantity
          alert("add quantity")
          return [...addQuantity(state, action.payload.id)]
        } else {
          // add product to cart with quantity 1
          return [...state, { ...action.payload, quantity: 1 }]
        }
      } else {
        // when state.length === 0, add first product with quantity 1
        return [{ ...action.payload, quantity: 1 }]
      }

    case INCREMENT_CART:
      return state.map((e) => {
        if (e.id === action.payload) {
          return {
            ...e,
            quantity: parseInt(e.quantity) + 1
          };
        } else {
          return e;
        }
      })

    case DECREMENT_CART:
      return state.map((e) => {
        if (e.id === action.payload) {
          return {
            ...e,
            quantity: parseInt(e.quantity) - 1
          };
        } else {
          return e;
        }
      })

    case REMOVE_CART:
      return state.filter(e => e.id !== action.payload)

    default:
      return state;
  }
};