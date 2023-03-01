import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducer/product/productReducer";
import { cartReducer } from "./reducer/cart/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore(
  {
    reducer: {
      product: productReducer,
      cart: cartReducer,
    },
  },
  composeWithDevTools()
);

export default store;
