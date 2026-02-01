import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const [latestProduct, setLatestProduct] = useState([]);
  // 1. bnst5dm useContext 3l4an nfta7 el "ShopContext" (el m5zn)
  // w ntl3 mno el "products" 3l4an nst5dmha (7alyan msknaha fe edna bs lsa m3rdnash swar)
  const { products } = useContext(ShopContext);
  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, [products]);
  return (
    // my-10: margin fo2 w t7t 3l4an nfsl el section 3n elly 2blo
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        {/* 2. bn-nadah 3la "Maknet el Tba3a" (Title Component) */}
        {/* text1="LATEST" (romady), text2="COLLECTION" (eswd) */}
        <Title text1={"LATEST"} text2={" COLLECTION"} />

        {/* 3. w-3/4 m-auto: 5ly 3rd el klam 75% mn el 4a4a w center (auto) */}
        {/* text-xs sm:text-sm...: kbr el 5at kol ma el 4a4a tkbr */}
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius vitae
          voluptatum facere libero. Laudantium accusamus quod alias! Error
          similique, quae accusamus ratione minima, ab fuga accusantium aperiam
          eos, perferendis maxime.
        </p>
      </div>
      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProduct.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
