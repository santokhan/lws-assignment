import { initialState } from "./initialState";
import { ADD_TO_CART, INCREMENT_CART, DECREMENT_CART, REMOVE_CART } from "./actionTypes";

const addQuantity = (arr, id) => arr.map(e => {
  if (e.id === id) e.quantity = e.quantity + 1;
  return { ...e };
})
const compare = (arr, id) => {
  let status = false;
  arr.forEach((e, i) => {
    if (e.id === id) {
      return true;
    } else {
      return false;
    }
  })
  return status;
}
const addCartInitial = list => ({ ...list, quantity: 1 });

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.length > 0) {
        let flag = false;
        state.forEach(e => {
          if (e.id == action.payload.id) {
            flag = true;
          }
        });

        if (flag) {
          return state.map(e => {
            if (e.id == action.payload.id) {
              return { ...e, quantity: e.quantity + 1 };
            } else {
              return e;
            }
          })
        } else {
          let { quantity } = action.payload
          return [...state, { ...action.payload, quantity: quantity + 1 }]
        }

      } else {
        // when state.length === 0, with initial quantity = 1
        return [{ ...action.payload, quantity: 1 }];
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