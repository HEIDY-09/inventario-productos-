import { useContext, useState, useRef } from "react";
import { ProductContext } from "../context/ProductContext";
import "./ProductForms.css";

const ProductForm = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  const { handleAddProduct } = useContext(ProductContext);

  const inputRef = useRef(null);

  const totalPrductRef = useRef(0);

  // console.log({ id: crypto.randomUUID(), nombre, precio, cantidad });

  const handleAdd = () => {
    handleAddProduct({ id: crypto.randomUUID(), nombre, precio, cantidad });
    setNombre("");
    setPrecio(0);
    setCantidad(0);

    totalPrductRef.current = totalPrductRef.current + 1;
    console.log(
      `Total de productos agregados en esta sesion: ${totalPrductRef.current}`,
    );

    inputRef.current.focus();
  };

  return (
    <div className="product-form card">
      <input
        className="input"
        ref={inputRef}
        type="text"
        placeholder="Nombre del producto"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
      />
      <input
        className="input"
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(event) => setPrecio(event.target.value)}
      />
      <input
        className="input"
        type="number"
        placeholder="Cantidad"
        value={cantidad}
        onChange={(event) => setCantidad(event.target.value)}
      />
      <button className="btn btn--acento" type="button" onClick={handleAdd}>
        Agregar
      </button>
    </div>
  );
};

export default ProductForm;
