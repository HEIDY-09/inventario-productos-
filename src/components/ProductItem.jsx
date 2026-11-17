const ProductItem = ({ product }) => {
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
      <p>cantidad: {product.cantidad}</p>
      <button>Eliminar</button>
    </div>
  );
};

export default ProductItem;
