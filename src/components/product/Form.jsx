import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/reducer/product/actions";

const emptyState = {
  category: "",
  name: "",
  price: 0,
  quantity: 0,
  src: "",
};

export default function Form() {
  const [data, setdata] = useState(emptyState);
  const dispatch = useDispatch();

  function handleChange(e) {
    let { value, name } = e.target;

    if (name === "price") value = parseInt(value);

    if (name === "quantity") value = parseInt(value);

    setdata({ ...data, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addProduct(data));
    setdata(emptyState);
  }

  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
        onSubmit={handleSubmit}
      >
        <div className="space-y-2">
          <label htmlFor="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            required={true}
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lws-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            required={true}
            name="category"
            value={data.category}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lws-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            required={true}
            name="src"
            value={data.src}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              required={true}
              name="price"
              value={data.price}
              min={0}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lws-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              required={true}
              min={0}
              name="quantity"
              value={data.quantity}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" id="lws-inputSubmit" className="submit bg-black">
          Add Product
        </button>
      </form>
    </div>
  );
}
