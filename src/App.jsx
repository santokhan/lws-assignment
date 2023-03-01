import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductView from "./views/ProductView";
import CartView from "./views/CartView";
import { Provider } from "react-redux";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductView />}></Route>
          <Route path="/cart" element={<CartView />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
