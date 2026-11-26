import { useContext, useState, useMemo } from "react";
import { ProductContext } from "../context/ProductContext";

export const ProductSummary = () => {
  const { productos } = useContext(ProductContext);
  const [monstrar, setMostrar] = useState(false);

  //   console.log(productos);

  const resumen = useMemo(() => {
    console.log("Calculando...");

    const totalProducts = productos.length;
    const totalValue = productos.reduce(
      (acc, product) => acc + product.precio * product.cantidad,
      0,
    );
    return { totalProducts, totalValue };
  }, [productos]);

  console.log("Render del componente...");

  return (
    <div>
      <h2>Resumen de productos</h2>
      <p>Total de productos: {resumen.totalProducts}</p>

      <button onClick={() => setMostrar(!monstrar)}>
        {monstrar ? "Ocultar" : "Mostrar"}
      </button>
      {monstrar && <p>Valor total: ${resumen.totalValue}</p>}
    </div>
  );
};
