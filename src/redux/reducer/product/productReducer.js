import { ADD_PRODUCT, DECREMENT_PRODUCT, INCREMENT_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";
import initialState from "./initialState";

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const maxId = state.reduce((acc, current) => Math.max(acc, current.id), 0);
      return [...state, { ...action.payload, id: maxId + 1 }];

    case REMOVE_PRODUCT:
      return state.map((e) => {
        let data = { ...e };
        if (data.id === action.payload) {
          data.quantity = parseInt(data.quantity) - 1;
        }
        return data;
      });

    case INCREMENT_PRODUCT:
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

    case DECREMENT_PRODUCT:
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

    default:
      return state;
  }
};
