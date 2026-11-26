import { useContext, useState, useMemo } from "react";
import { ProductContext } from "../context/ProductContext";
import "./ProductSummary.css";

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
    <section className="product-summary card">
      <h2 className="product-summary__title">Resumen de productos</h2>
      <p className="product-summary__text">
        Total de productos: {resumen.totalProducts}
      </p>

      <button
        className="btn btn--secundario"
        onClick={() => setMostrar(!monstrar)}
      >
        {monstrar ? "Ocultar" : "Mostrar"}
      </button>
      {monstrar && (
        <p className="product-summary__value">
          Valor total: ${resumen.totalValue}
        </p>
      )}
    </section>
  );
};
