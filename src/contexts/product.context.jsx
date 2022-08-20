import { createContext, useState, useEffect } from "react";

import PRODUCTS from "../dev-data/shop-data.json";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  // useEffect(() => {
  //     if (data) {
  //       (data);
  //     }
  //     setCurrentData(data);
  //   });
  //   return unsubscribe;
  // }, []);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
