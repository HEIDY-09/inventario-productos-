import { useContext, useReducer } from "react";
import { ProductContext } from "../context/ProductContext";

<<<<<<< HEAD
const initialState = {
  cantidad: 1,
  name: "Cesar",
};

const reducerCouter = (state, action) => {
  switch (action.type) {
    case "INCREMENTAR": {
      return {
        ...state,
        cantidad: state.cantidad + 1,
      };
    }
    case "DECREMENTAR": {
      return {
        ...state,
        cantidad: state.cantidad - 1,
      };
    }
  }
};

const ProductItem = ({ product, isEdit }) => {
  const [state, dispatch] = useReducer(reducerCouter, initialState);

  // console.log(state);

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

      {isEdit ? (
        <p>cantidad: {product.cantidad}</p>
      ) : (
        <>
          <button onClick={() => dispatch({ type: "DECREMENTAR" })}>-</button>
          <p>Cantidad {state.cantidad}</p>
          <button onClick={() => dispatch({ type: "INCREMENTAR" })}>+</button>
        </>
      )}

      {isEdit ? (
        <button onClick={() => handleDeleteItem(product.id)}>Eliminar</button>
      ) : (
        <button>Comprar</button>
      )}
=======
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
>>>>>>> 8bbf30f16f778c2b0562727e803e5e6b27bce1f9
    </div>
  );
};

export default ProductItem;
