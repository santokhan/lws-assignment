import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import { removeProduct } from "../../redux/reducer/product/actions";
import { addToCart } from "../../redux/reducer/cart/actions.js";

export default function Main() {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  function handleAddToCart(item) {
    // product id
    dispatch(removeProduct(item.id));

    // product data
    dispatch(addToCart(item));
  }

  return (
    <main className="py-16">
      <div className="productWrapper">
        <div className="productContainer" id="lws-productContainer">
          {product.map((item, i) => {
            if (item) {
              const { id, name, price, quantity, category, src } = item;
              return (
                <div className="lws-productCard" key={i}>
                  <img className="lws-productImage" src={src} alt="product" />
                  <div className="p-4 space-y-2">
                    <h4 className="lws-productName">{name}</h4>
                    <p className="lws-productCategory capitalize">{category}</p>
                    <div className="flex items-center justify-between pb-2">
                      <p className="productPrice">
                        BDT <span className="lws-price">{price}</span>
                      </p>
                      <p className="productQuantity">
                        QTY <span className="lws-quantity">{quantity}</span>
                      </p>
                    </div>
                    <button
                      className="lws-btnAddToCart"
                      disabled={quantity > 0 ? false : true}
                      onClick={() => {
                        handleAddToCart(item);
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              );
            } else {
              return "";
            }
          })}
        </div>
        <Form />
      </div>
    </main>
  );
}
