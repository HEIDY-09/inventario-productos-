import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductItem = ({ product }) => {
  console.log(product.id);

  const { handleDeleteItem } = useContext(ProductContext);

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <h2>{product.nombre}</h2>
      <p>precio: ${product.precio}</p>
      <p>cantidad: {product.cantidad}</p>
      <button onClick={() => handleDeleteItem(product.id)}>Eliminar</button>
    </div>
  );
};

export default ProductItem;
