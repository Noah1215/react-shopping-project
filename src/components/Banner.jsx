import React from "react";

const Banner = () => {
  return (
    <section className="h-96 bg-yellow-900 relative">
      <div className="w-full h-full bg-cover bg-banner opacity-80" />
      <div className="absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl">
        <h2 className="text-6xl">SHOP WITH ME</h2>
        <p className="text-3xl">All you want, High Quality</p>
      </div>
    </section>
  );
};

export default Banner;
