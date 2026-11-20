import { useReducer } from "react";
import { ProductContext } from "./ProductContext";
import { LISTA_DE_PRODUCTOS, productReducer } from "./productReducer";

export const ProductPrivider = ({ children }) => {
  // const [productos, setProductos] = useState(LISTA_DE_PRODUCTOS);
  const [productos, dispatch] = useReducer(productReducer, LISTA_DE_PRODUCTOS);

  const handleAddProduct = (product) => {
    dispatch({ type: "AGREGAR_PRODUCTO", payload: product });
  };

  const handleDeleteItem = (itemId) => {
    dispatch({ type: "ELIMINAR_PRODUCTO", payload: itemId });
  };

  return (
    <ProductContext.Provider
      value={{ productos, handleAddProduct, handleDeleteItem }}
    >
      {children}
    </ProductContext.Provider>
  );
};
