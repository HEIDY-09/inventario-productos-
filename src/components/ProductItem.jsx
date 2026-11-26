import { useContext, useReducer } from "react";
import { ProductContext } from "../context/ProductContext";

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
    </div>
  );
};

export default ProductItem;
