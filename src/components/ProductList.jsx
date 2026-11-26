import { useContext } from "react";
import ProductItem from "./ProductItem";
import { ProductContext } from "../context/ProductContext";
import "./ProductList.css";

const ProductList = ({ isEdit }) => {
  const { productos } = useContext(ProductContext);

  return (
    <div className="product-list">
      {productos.map((product) => (
        <ProductItem key={product.id} product={product} isEdit={isEdit} />
      ))}
    </div>
  );
};

export default ProductList;
