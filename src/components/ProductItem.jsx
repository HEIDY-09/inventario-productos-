import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductItem = ({ product }) => {
  // Extraemos setEditingProduct del contexto para activar la edición
  const { setEditingProduct } = useContext(ProductContext);

  return (
    <div className="product-card">
      <div>
        <h3>{product.nombre}</h3>
        <p>Precio: ${product.precio} | Cantidad: {product.cantidad}</p>
      </div>

      {/* Botón de Editar */}
      <button 
        className="btn-edit" 
        onClick={() => setEditingProduct(product)}
      >
        Editar
      </button>
    </div>
  );
};

export default ProductItem;
