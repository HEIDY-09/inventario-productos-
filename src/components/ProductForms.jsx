import { useState } from "react";

const ProductForm = ({ onAdd }) => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  console.log({ id: crypto.randomUUID(), nombre, precio, cantidad });

  const handleAdd = () => {
    onAdd({ id: crypto.randomUUID(), nombre, precio, cantidad });
    setNombre("");
    setPrecio(0);
    setCantidad(0);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(event) => setPrecio(event.target.value)}
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={cantidad}
        onChange={(event) => setCantidad(event.target.value)}
      />
      <button onClick={handleAdd}>Agregar</button>
    </div>
  );
};

export default ProductForm;
