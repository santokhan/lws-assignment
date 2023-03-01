import { useDispatch, useSelector } from "react-redux";
import {
  decrementCart,
  incrementCart,
  removeCart,
} from "../../redux/reducer/cart/actions";
import {
  decrementProduct,
  incrementProduct,
} from "../../redux/reducer/product/actions";

function totalCount(cart) {
  return cart.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );
}

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function incrementQuantity(id) {
    // cart
    dispatch(incrementCart(id));

    // product
    dispatch(decrementProduct(id));
  }

  function decrementQuantity(id) {
    // cart
    dispatch(decrementCart(id));

    // product
    dispatch(incrementProduct(id));
  }
  function handleRemoveCart(id) {
    dispatch(removeCart(id));
  }

  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {cart.map((item, ind) => {
              if (item) {
                const { id, name, price, quantity, category, src } = item;
                return (
                  <div className="cartCard" key={ind}>
                    <div className="flex items-center col-span-6 space-x-6">
                      <img className="lws-cartImage" src={src} alt="product" />
                      <div className="space-y-2">
                        <h4 className="lws-cartName">{name}</h4>
                        <p className="lws-cartCategory capitalize">
                          {category}
                        </p>
                        <p>
                          BDT <span className="lws-cartPrice">{price}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                      {/* amount buttons */}
                      <div className="flex items-center space-x-4">
                        <button
                          className="lws-incrementQuantity"
                          onClick={() => {
                            incrementQuantity(id);
                          }}
                        >
                          <i className="text-lg fa-solid fa-plus" />
                        </button>
                        <span className="lws-cartQuantity">{quantity}</span>
                        <button
                          className="lws-decrementQuantity"
                          disabled={quantity > 0 ? false : true}
                          onClick={() => {
                            decrementQuantity(id);
                          }}
                        >
                          <i className="text-lg fa-solid fa-minus" />
                        </button>
                      </div>
                      <p className="text-lg font-bold">
                        BDT{" "}
                        <span className="lws-calculatedPrice">
                          {quantity * price}
                        </span>
                      </p>
                    </div>
                    {/* delete button */}
                    <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                      <button
                        className="lws-removeFromCart"
                        onClick={() => {
                          handleRemoveCart(id);
                        }}
                      >
                        <i className="text-lg text-red-400 fa-solid fa-trash" />
                      </button>
                    </div>
                  </div>
                );
              } else {
                return "";
              }
            })}
          </div>
          {/* Bill Details */}
          <div>
            <div className="billDetailsCard">
              <h4 className="mt-2 mb-8 text-xl font-bold text-center">
                Bill Details
              </h4>
              <div className="space-y-4">
                {/* sub total */}
                <div className="flex items-center justify-between">
                  <p>Sub Total</p>
                  <p>
                    BDT <span className="lws-subtotal">{totalCount(cart)}</span>
                  </p>
                </div>
                {/* Discount */}
                <div className="flex items-center justify-between">
                  <p>Discount</p>
                  <p>
                    BDT <span className="lws-discount">0</span>
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p>VAT</p>
                  <p>
                    BDT <span className="vat">0</span>
                  </p>
                </div>
                {/* Total */}
                <div className="flex items-center justify-between pb-4">
                  <p className="font-bold">TOTAL</p>
                  <p className="font-bold">
                    BDT <span className="lws-total">{totalCount(cart)}</span>
                  </p>
                </div>
                <button className="placeOrderbtn">place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
