import { useState } from "react";
import { ProductContext } from "./ProductContext";

const LISTA_DE_PRODUCTOS = [
  { id: 1, nombre: "Producto 1", precio: 10, cantidad: 5 },
  { id: 2, nombre: "Producto 2", precio: 20, cantidad: 3 },
  { id: 3, nombre: "Producto 3", precio: 15, cantidad: 8 },
];

export const ProductPrivider = ({ children }) => {
  const [productos, setProductos] = useState(LISTA_DE_PRODUCTOS);

  const handleAddProduct = (product) => {
    setProductos([...productos, product]);
  };

  const handleDeleteItem = (itemId) => {
    const updatedProducts = productos.filter((item) => item.id !== itemId);
    setProductos(updatedProducts);
  };

  return (
    <ProductContext.Provider
      value={{ productos, handleAddProduct, handleDeleteItem }}
    >
      {children}
    </ProductContext.Provider>
  );
};
