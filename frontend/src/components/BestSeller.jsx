import React, { useState, useEffect, useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
const BestSeller = () => {
  const [bestProduct, setBestProduct] = useState([]);
  const { products } = useContext(ShopContext);
  useEffect(() => {
    const best = products.filter((item) => item.bestseller).slice(0, 5);
    setBestProduct(best);
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={" SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-c ols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestProduct.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
