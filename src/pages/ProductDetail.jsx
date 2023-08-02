import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";
const ProductDetail = () => {
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [success, setSuccess] = useState();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess("Item is successfully added in your cart");
        setTimeout(() => setSuccess(null), 2000);
      },
    });
  };
  return (
    <section className="flex flex-col md:flex-row p-4">
      <img className="w-full px-4 md:w-3/5" src={image} alt={title} />
      <div className="w-full flex flex-col p-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-xl py-2 border-b border-gray-400">{category}</p>
        <p className="text-2xl font-bold py-2 border-b border-gray-400">
          ${price}
        </p>
        <p className="py-4 text-lg">{description}</p>
        <div className="flex items-center">
          <label className="text-brand font-bold" htmlFor="select">
            Option:
          </label>
          <select
            id="select"
            className="p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none"
            onChange={handleSelect}
            value={selected}
          >
            {options &&
              options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
          </select>
        </div>
        {success && <p className="my-2 font-bold">{success}</p>}
        <Button text="Add Cart" onClick={handleClick} />
      </div>
    </section>
  );
};

export default ProductDetail;
