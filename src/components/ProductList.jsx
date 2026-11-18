import { useContext } from "react";
import ProductItem from "./ProductItem";
import { ProductContext } from "../context/ProductContext";

const ProductList = () => {
  const { productos } = useContext(ProductContext);

  return (
    <div>
      {productos.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
