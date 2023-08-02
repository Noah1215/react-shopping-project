import React from "react";

const PriceCard = ({ text, price }) => {
  const fixedPrice = price.toFixed(2);
  return (
    <div className="bg-gray-50 p-8 mx-2 rounded-2xl text-center text-lg md:text-xl">
      <p>{text}</p>
      <p className="font-bold text-brand text-xl md:text-2xl">${fixedPrice}</p>
    </div>
  );
};

export default PriceCard;
