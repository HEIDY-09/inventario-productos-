import { useContext } from "react";
import ProductItem from "./ProductItem";
import { ProductContext } from "../context/ProductContext";

const ProductList = ({ isEdit }) => {
  const { productos } = useContext(ProductContext);

  return (
    <div>
      {productos.map((product) => (
        <ProductItem key={product.id} product={product} isEdit={isEdit} />
      ))}
    </div>
  );
};

export default ProductList;
