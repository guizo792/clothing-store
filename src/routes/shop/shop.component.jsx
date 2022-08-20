import { useContext } from "react";

import {
  ProductContext,
  ProductProvider,
} from "../../contexts/product.context";

const Shop = () => {
  const { products } = useContext(ProductProvider);
  return (
    <div>
      {products.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
