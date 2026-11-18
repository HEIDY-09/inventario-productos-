import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // Función para agregar producto
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  // Función para actualizar producto en edición
  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        editingProduct,
        setEditingProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};