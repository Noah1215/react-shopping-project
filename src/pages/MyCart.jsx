import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCarts } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import CartItem from "../components/CartItem";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import PriceCard from "../components/PriceCard";

const DELIVERY = 1.99;

const MyCart = () => {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery(["carts"], () =>
    getCarts(uid)
  );

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseFloat(current.price) * current.quantity,
      0
    );

  const TAX = totalPrice * 0.05;
  return (
    <section>
      <p>My Cart</p>
      {!hasProducts && <p>There is no item!</p>}
      {hasProducts && (
        <>
          <ul>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
          <div>
            <PriceCard text="Product Price" price={totalPrice} />
            <BsFillPlusCircleFill />
            <PriceCard text="Delivery Fee" price={DELIVERY} />
            <BsFillPlusCircleFill />
            <PriceCard text="Tax" price={TAX} />
            <FaEquals />
            <PriceCard text="Total Price" price={totalPrice + DELIVERY + TAX} />
          </div>
        </>
      )}
    </section>
  );
};

export default MyCart;
