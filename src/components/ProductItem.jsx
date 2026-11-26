import { useContext, useReducer } from "react";
import { ProductContext } from "../context/ProductContext";
import "./ProductItem.css";

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
    <article className="product-item card">
      <h2 className="product-item__title">{product.nombre}</h2>
      <p className="product-item__price">precio: ${product.precio}</p>

      {isEdit ? (
        <p className="product-item__quantity badge--exito">
          cantidad: {product.cantidad}
        </p>
      ) : (
        <div className="product-item__controls">
          <button
            className="btn btn--secundario"
            onClick={() => dispatch({ type: "DECREMENTAR" })}
          >
            -
          </button>
          <p className="product-item__quantity">Cantidad {state.cantidad}</p>
          <button
            className="btn btn--secundario"
            onClick={() => dispatch({ type: "INCREMENTAR" })}
          >
            +
          </button>
        </div>
      )}

      <div className="product-item__actions">
        {isEdit ? (
          <button
            className="btn btn--peligro"
            onClick={() => handleDeleteItem(product.id)}
          >
            Eliminar
          </button>
        ) : (
          <button className="btn btn--acento">Comprar</button>
        )}
      </div>
    </article>
  );
};

export default ProductItem;
